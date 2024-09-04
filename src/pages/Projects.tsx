import React from 'react';

import ProjectCard from '../components/ProjectCard';
import cti from '../assets/images/cti.jpg';
import selenium from '../assets/images/selenium.jpg';


const Projects: React.FunctionComponent = () => {
    const projects = [
        {
            title: 'CTI - Gerador de Alertas',
            description: 'Projeto de gerador parametrizável de alertas em uma base de dados de posts maliciosos. Esse projeto faz parte do meu Trabalho de Conclusão de Curso (TCC) do curso de Sistemas de Informação pela Universidade Federal de Uberlândia.',
            image: cti,
            link: 'https://github.com/mateusherrera/cti_alert_generator',
        }, {
            title: 'CTI - API para Parametrização do Gerador de Alertas',
            description: 'API Django para parametrização do gerador de alertas. Esse projeto faz parte do meu Trabalho de Conclusão de Curso (TCC) do curso de Sistemas de Informação pela Universidade Federal de Uberlândia.',
            image: cti,
            link: 'https://github.com/mateusherrera/cti_api_param',
        }, {
            title: 'CTI - Commons',
            description: 'Classes comuns aos projetos \'cti\' (Gerador de Alertas para posts colhidos pelo grupo de pesquisa de Inteligência de Ameaças Cibernética). Esse projeto faz parte do meu Trabalho de Conclusão de Curso (TCC) do curso de Sistemas de Informação pela Universidade Federal de Uberlândia.',
            image: cti,
            link: 'https://github.com/mateusherrera/cti_common',
        }, {
            title: 'Basic Selenium',
            description: 'Classe de métodos genéricos para agilizar o desenvolvimento de automações com selenium em Python.',
            image: selenium,
            link: 'https://github.com/mateusherrera/basic_selenium',
        },
    ];

    return (
        <div>
            <h1
                className='display-4 px-3 pt-3'
                style={{ color: '#4c4f69' }}
            >Meus Projetos</h1>
            <hr />

            <div className="ms-4 row">
                {projects.map((project, _) => (
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
