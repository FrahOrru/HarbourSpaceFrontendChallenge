export interface ApprenticeshipPhazero {
    id: number;
    slug: string;
    scholarship: Scholarship;

}

export interface Scholarship {

    scope: string;
    id: number;
    name: string;
    description: Description[];

    location: any;

    scholarship_start_date: Date;
    application_end_date: Date;
    duration: number;
    position: string;
    about: Description[];
    tuition: number;
    total_value: number;
    stipend_per_month: number;
    stipend_per_year: number;
    remaining: number;
    study_commitment: number;
    internship_commitment: number;
    credits: number;
    courses: number;
    degree: string;
}

export interface Description {
    type: 'paragraph' | string;
    data: string;
}