from flask import Blueprint, request, jsonify
from app.models import Medication
from app.services.medication_service import MedicationService

medication_bp = Blueprint('medication', __name__)

@medication_bp.route('/medications', methods=['POST'])
@jwt_required
def add_medication():
    data = request.get_json()
    try:
        medication = MedicationService.create_medication(
            user_id=get_jwt_identity(),
            name=data['name'],
            dosage=data['dosage'],
            frequency=data['frequency'],
            time_slots=data['time_slots']
        )
        return jsonify(medication.to_dict()), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400 