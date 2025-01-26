CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(80) UNIQUE NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE medications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    dosage VARCHAR(50),
    frequency VARCHAR(50),
    time_slots JSON,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE adherence_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    medication_id INT NOT NULL,
    taken_at TIMESTAMP,
    status ENUM('taken', 'missed', 'skipped') NOT NULL,
    FOREIGN KEY (medication_id) REFERENCES medications(id)
); 