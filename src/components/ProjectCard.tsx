import React from 'react';


interface IProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
};

const ProjectCard: React.FunctionComponent<IProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div
            className='shadow border rounded p-4 col-5 m-4'
        >
            <div className='row'>
                <img className='p-0 ms-2 rounded col-4' src={image} alt={title} height={200} />
                <div className='ms-4 col-7'>
                    <h4 className='h4'>
                        <a
                            href={link}
                            style={{
                                textDecoration: 'none',
                                color: '#4c4f69',
                            }}
                        >{title}</a>
                    </h4>
                    <p className='pt-1 text-body-secondary' style={{ textAlign: 'justify' }} >{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
