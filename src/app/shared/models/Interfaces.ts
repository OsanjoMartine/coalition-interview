export interface IPatient {
    age: number;
    date_of_birth: string;
    diagnosis_history: IDiagnosisHistory[];
    diagnostic_list: IDiagnosticLlist[];
    emergency_contact: string;
    gender: string;
    insurance_type: string;
    lab_results: [];
    name: string;
    phone_number: string;
    profile_picture: string;
}

export interface IDiagnosticLlist {
    name: string;
    description: string;
    status: string;
}

export interface IDiagnosisHistory {
    blood_pressure: IBloodPressure;
    heart_rate: IValueLevel;
    month: string;
    respiratory_rate: IValueLevel;
    temperature: IValueLevel;
    year: number;
}

export interface IBloodPressure {
    diastolic: IValueLevel;
    systolic: IValueLevel;
}

export interface IValueLevel {
    value: number;
    levels: string;
}