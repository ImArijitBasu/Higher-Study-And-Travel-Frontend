'use client'
import { useParams } from 'next/navigation';
import React from 'react';

interface University {
    id: number;
    universityName: string;
    programName: string;
    location: string;
    worldRank: string;
    degree: string;
    intakeDate: string;
    entryScore: string;
    tuitionFee: string;
    image: string;
    featured?: boolean;
}

const UniversityDetails = () => {
    const params = useParams();
    const universityId = params.id;

    const [university, setUniversity] = React.useState<University | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('/universities.json')
            .then(res => res.json())
            .then((data: University[]) => {
                const uni = data.find(u => u.id === Number(universityId)); // ✅
                setUniversity(uni || null);
            })
            .finally(() => setLoading(false));
    }, [universityId]);

    console.log('University name is: ', university);

    if (loading) return <p>Loading...</p>;
    if (!university) return <p>University not found</p>;

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{university.universityName}</h1>
            <img src={university.image} alt={university.universityName} className="w-full max-w-md h-auto mb-4" />
            <p><strong>Program:</strong> {university.programName}</p>
            <p><strong>Location:</strong> {university.location}</p>
            <p><strong>World Rank:</strong> {university.worldRank}</p>
            <p><strong>Degree:</strong> {university.degree}</p>
            <p><strong>Intake Date:</strong> {university.intakeDate}</p>
            <p><strong>Entry Score:</strong> {university.entryScore}</p>
            <p><strong>Tuition Fee:</strong> {university.tuitionFee}</p>
        </div>
    );
};

export default UniversityDetails;
