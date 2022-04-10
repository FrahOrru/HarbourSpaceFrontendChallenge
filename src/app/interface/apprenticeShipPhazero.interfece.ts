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
    company: Company;

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
    study_commitment_text: string;
    internship_commitment: number;
    internship_commitment_text: string;
    credits: number;
    courses: number;
    degree: string;
    faqs: Faqs;
}

export interface Description {
    type: 'paragraph' | string;
    data: string;
}

export interface Company {
    color: string;
    color_logo: UrlInfo;
    description: Description[];
    id: number;
    logo_dark: UrlInfo;
    logo_light: UrlInfo;
    name: String;
    photos: Photo[];
    rank: number;
    scope: string;
    type: string;
    website: string;
}

export interface UrlInfo {
    rawFile: any;
    src: string;
}

export interface Photo {
    id: number;
    name: string;
    url: string;
}

export interface Faqs {
    categories: string[]
    items: []
}

export interface FaqsItem {
    answer: Description[];
    question: string;
    type: string;
}