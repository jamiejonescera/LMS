from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os
from sqlalchemy import text
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for specific frontend URLs
# CORS configuration: Allow frontend URL from environment variables
frontend_urls = os.getenv('FRONTEND_URLS').split(',')
CORS(app, resources={r"/api/*": {"origins": frontend_urls}})

# Get the database URI from environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy database instance
db = SQLAlchemy(app)

# Define the test route for database connection
@app.route('/test_db', methods=['GET'])
def test_db_connection():
    try:
        # Use text() to declare the query
        result = db.session.execute(text('SELECT 1'))
        return 'Database connection is working!', 200
    except Exception as e:
        logging.error(f"Database connection failed: {e}")
        return f'Database connection failed: {str(e)}', 500

# Define a test route for frontend-backend connection
@app.route('/api/test', methods=['GET'])
def test_endpoint():
    try:
        # Simulate a simple test response
        return jsonify({"message": "Backend is connected!"}), 200
    except Exception as e:
        # If there's an error, send a message indicating a failure
        return jsonify({"error": "Failed to connect backend.", "details": str(e)}), 500

# Log all incoming requests
@app.before_request
def log_request():
    logging.info(f"{request.method} request received at {request.path}")

# Import your Blueprints (make sure all routes are included)
from routes.departmentRoutes import department_bp
from routes.supplierRoutes import supplier_bp
from routes.productsRoutes import product_bp
from routes.authRoutes import auth_bp
from routes.purchaseRoutes import purchase_bp
from routes.evaluateRoutes import evaluate_bp
from routes.damageRoutes import damage_bp
from routes.inventoryRoutes import inventory_bp
from routes.productsupplierRoutes import product_supplier_bp
from routes.maintenanceRoutes import maintenance_bp
from routes.departmentrequestRoutes import departmentrequest_bp

# Register Blueprints
app.register_blueprint(department_bp)
app.register_blueprint(supplier_bp)
app.register_blueprint(product_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(purchase_bp)
app.register_blueprint(evaluate_bp)
app.register_blueprint(damage_bp)
app.register_blueprint(inventory_bp)
app.register_blueprint(product_supplier_bp)
app.register_blueprint(maintenance_bp)
app.register_blueprint(departmentrequest_bp)

# Define the root route
@app.route('/')
def hello():
    return 'Hotdog'

# Run the app
if __name__ == '__main__':
    app.run(debug=os.getenv('DEBUG', 'False') == 'True', port=8000, host='0.0.0.0')
