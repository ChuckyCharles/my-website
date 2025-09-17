import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Hypervisor Deployment Automation",
      description: "Automated KVM hypervisor deployment for enterprise environments with Ansible and Terraform.",
      technologies: ["KVM", "Ansible", "Terraform", "Linux"],
      link: "https://gitlab.com/cloudchuck/kvm_deplyoment",
      image: "/assets/images/projects/hypervisor-bg.jpg"
    },
    {
      title: "Multi-Cloud Management Platform",
      description: "Unified platform for hybrid cloud infrastructure management across AWS, Azure, and on-premises.",
      technologies: ["AWS", "Azure", "Python", "Docker", "Kubernetes"],
      link: "https://github.com/ChuckyCharles/Multi-Huybrid_Cloud_Manager.git",
      image: "/assets/images/projects/multicloud-bg.jpg"
    },
    {
      title: "Terraform VM Deployment",
      description: "Infrastructure as Code solution for automated VM provisioning and management.",
      technologies: ["Terraform", "vSphere", "HashiCorp", "YAML"],
      link: "https://github.com/ChuckyCharles/Multi-Huybrid_Cloud_Manager.git",
      image: "/assets/images/projects/terraform-bg.jpg"
    },
    {
      title: "OpenShift Voting Application",
      description: "Containerized voting application with CI/CD pipeline on Red Hat OpenShift Service on AWS (ROSA).",
      technologies: ["OpenShift", "Kubernetes", "ROSA", "CI/CD"],
      link: "https://github.com/ChuckyCharles/Voting_App_Openshift",
      image: "/assets/images/projects/kubernetes-bg.jpg"
    }
  ];

  return (
    <div className="projects-page" style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.96) 25%, rgba(51, 65, 85, 0.94) 50%, rgba(71, 85, 105, 0.92) 75%, rgba(100, 116, 139, 0.90) 100%)',
      minHeight: '100vh',
      color: '#ffffff',
      paddingTop: '80px'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 3vw, 2rem)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.1
          }}>My Projects</h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#9ca3af',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Explore my portfolio of cloud infrastructure and DevOps projects that demonstrate my expertise in automation, containerization, and hybrid cloud solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{
        padding: '0 clamp(1rem, 3vw, 2rem) clamp(3rem, 8vw, 6rem)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2rem)'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => window.open(project.link, '_blank')}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
              e.target.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
              e.target.style.borderColor = 'rgba(75, 85, 99, 0.3)';
            }}>
              {/* Project Image */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(55, 65, 81, 0.8) 100%), url('${project.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  background: 'rgba(59, 130, 246, 0.9)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>
                  View Project
                </div>
              </div>
              
              {/* Project Content */}
              <div style={{
                padding: 'clamp(1.5rem, 4vw, 2rem)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>{project.title}</h3>
                
                <p style={{
                  color: '#d1d5db',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}>{project.description}</p>
                
                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      background: 'rgba(55, 65, 81, 0.8)',
                      color: '#e5e7eb',
                      padding: '0.375rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
                      fontWeight: 500
                    }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(2rem, 5vw, 3rem)'
        }}>
          <a href="https://gitlab.com/cloudchuck" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
               color: '#ffffff',
               padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
               borderRadius: '8px',
               textDecoration: 'none',
               fontSize: 'clamp(0.9rem, 2vw, 1rem)',
               fontWeight: 600,
               display: 'inline-flex',
               alignItems: 'center',
               gap: '0.5rem',
               transition: 'all 0.3s ease',
               boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
             }}
             onMouseEnter={(e) => {
               e.target.style.transform = 'translateY(-2px)';
               e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6)';
             }}
             onMouseLeave={(e) => {
               e.target.style.transform = 'translateY(0)';
               e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
             }}>
            View All Projects on GitLab
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects; 