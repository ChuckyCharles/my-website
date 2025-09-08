import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Charles Ochieng'
      };

      await emailjs.send(
        'service_x9oq0pf', // Replace with your EmailJS service ID
        'template_se4q6he', // Replace with your EmailJS template ID
        templateParams,
        'VKdJ9CuLlJWxJNjp2' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{background: '#0a1623', minHeight: '100vh', padding: '0', margin: '0'}}>
      {/* Hero Section */}
      <section className="hero-section" style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a1623 0%, #1a2332 100%)',
        padding: '40px 20px'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 2.8rem)',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '0.5em',
          textAlign: 'center'
        }}>Hello World! 👋</h1>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 600,
          color: '#fff',
          marginBottom: '0.5em',
          textAlign: 'center'
        }}>I'm Charles Ochieng</h2>
        <p style={{
          maxWidth: 600,
          textAlign: 'center',
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#bfc9da',
          marginBottom: '2em',
          padding: '0 20px'
        }}>
          A passionate Cloud Infrastructure engineer and DevOps engineer, transforming ideas into elegant digital experiences. Based in Nairobi, working worldwide.
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5em',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a href="#projects" className="cta" style={{
            background: '#6366f1',
            color: '#fff',
            fontWeight: 600,
            borderRadius: 8,
            padding: 'clamp(10px, 2vw, 12px) clamp(24px, 4vw, 32px)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            textAlign: 'center',
            minWidth: '140px'
          }}>View My Work</a>
          <a href="#contact" className="cta" style={{
            background: '#ff9900',
            color: '#fff',
            fontWeight: 600,
            borderRadius: 8,
            padding: 'clamp(10px, 2vw, 12px) clamp(24px, 4vw, 32px)',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)',
            textAlign: 'center',
            minWidth: '140px'
          }}>Let's Connect</a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-main" className="about-main" style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3em',
        background: '#0a1623',
        padding: '60px 20px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          width: 'min(350px, 100%)',
          height: 'auto',
          aspectRatio: '1/1',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img 
            src="/assets/images/profile.jpg" 
            alt="Profile" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top'
            }} 
          />
        </div>
        <div style={{
          maxWidth: 600,
          width: '100%',
          padding: '0 20px'
        }}>
          <h2 style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
            marginBottom: 16
          }}>About Me</h2>
          <p style={{
            color: '#bfc9da',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            marginBottom: 32
          }}>
            I'm a passionate Cloud Infrastructure engineer, DevOps Engineer, and product manager with a strong commitment to creating innovative solutions that enhance user experiences and drive business success. With expertise in Cloud Architecture, DevOps prectices, I create efficient, scalable solutions and enjoy solving complex problems.
          </p>
          <div style={{
            display: 'flex',
            gap: 24,
            marginBottom: 32,
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: '#232e41',
              color: '#bfc9da',
              borderRadius: 12,
              padding: '24px 32px',
              textAlign: 'center',
              minWidth: 120,
              flex: 1
            }}>
              <div style={{fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#6366f1'}}>3+</div>
              <div style={{fontSize: 'clamp(0.875rem, 2vw, 1rem)'}}>Years Experience</div>
            </div>
            <div style={{
              background: '#232e41',
              color: '#bfc9da',
              borderRadius: 12,
              padding: '24px 32px',
              textAlign: 'center',
              minWidth: 120,
              flex: 1
            }}>
              <div style={{fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#6366f1'}}>10+</div>
              <div style={{fontSize: 'clamp(0.875rem, 2vw, 1rem)'}}>Projects Completed</div>
            </div>
            <div style={{
              background: '#232e41',
              color: '#bfc9da',
              borderRadius: 12,
              padding: '24px 32px',
              textAlign: 'center',
              minWidth: 120,
              flex: 1
            }}>
              <div style={{fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#6366f1'}}>5+</div>
              <div style={{fontSize: 'clamp(0.875rem, 2vw, 1rem)'}}>Technical Articles</div>
            </div>
          </div>
         
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        background: '#0a1623',
        padding: '60px 20px 80px 20px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 48,
          padding: '0 20px'
        }}>
          <div style={{
            color: '#7b8cff',
            letterSpacing: 2,
            fontWeight: 700,
            fontSize: 'clamp(12px, 2vw, 14px)',
            marginBottom: 8
          }}>EXPERTISE</div>
          <h2 style={{
            color: '#fff',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 2.6rem)',
            marginBottom: 8,
            letterSpacing: 1
          }}>My Skills</h2>
          <div style={{
            width: 120,
            height: 4,
            background: '#7b8cff',
            margin: '0 auto 18px auto',
            borderRadius: 2
          }}></div>
          <p style={{
            color: '#bfc9da',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            maxWidth: 700,
            margin: '0 auto'
          }}>Crafting digital experiences with a blend of technical expertise and creative design thinking.</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(24px, 4vw, 48px)',
          flexWrap: 'wrap',
          maxWidth: 1200,
          margin: '0 auto'
        }}>
          {/* Development Card */}
          <div style={{
            background: '#192235',
            borderRadius: 18,
            padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
            width: 'min(100%, 400px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 24
            }}>
              <span style={{
                background: '#6366f1',
                color: '#fff',
                borderRadius: 12,
                padding: 10,
                fontSize: 'clamp(20px, 3vw, 24px)',
                marginRight: 12
              }}>☁️</span>
              <span style={{
                color: '#7b8cff',
                fontWeight: 700,
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'
              }}>Cloud Infrastructure</span>
            </div>
            <SkillBar label="Public and Private Cloud" color="#7b8cff" percent={80} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>☁️</span>} />
            <SkillBar label="Virtualization" color="#7b8cff" percent={70} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>🖥️</span>} />
            <SkillBar label="Networking & Security" color="#7b8cff" percent={75} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>🔒</span>} />
            <SkillBar label="Storage Solutions" color="#7b8cff" percent={70} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>💾</span>} />
            <SkillBar label="Cloud Migration & Optimization" color="#7b8cff" percent={90} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>🚀</span>} />
          </div>
          {/* Design Card */}
          <div style={{
            background: '#192235',
            borderRadius: 18,
            padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
            width: 'min(100%, 400px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 24
            }}>
              <span style={{
                background: '#a259f7',
                color: '#fff',
                borderRadius: 12,
                padding: 10,
                fontSize: 'clamp(20px, 3vw, 24px)',
                marginRight: 12
              }}>🛠️</span>
              <span style={{
                color: '#a259f7',
                fontWeight: 700,
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)'
              }}>DevOps Engineering</span>
            </div>
            <SkillBar label="Conteinerization and Orchestration" color="#a259f7" percent={95} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>🖥️</span>} />
            <SkillBar label="Automation and Configuration" color="#a259f7" percent={85} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>🛠️</span>} />
            <SkillBar label="Monitoring and Observability" color="#a259f7" percent={80} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>📈</span>} />
            <SkillBar label="Programming and Scripting" color="#a259f7" percent={80} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>💻</span>} />
            <SkillBar label="Development and CI/CD" color="#a259f7" percent={80} icon={<span style={{fontSize: 'clamp(16px, 2vw, 18px)'}}>🔄</span>} />
          </div>
        </div>
      </section>

      {/* Additional Expertise Section */}
      <section id="additional-expertise" style={{background: '#0a1623', padding: '0 0 80px 0'}}>
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <span style={{display: 'inline-block', background: '#192235', color: '#7b8cff', fontWeight: 600, borderRadius: 20, padding: '10px 32px', fontSize: 16, letterSpacing: 1, marginBottom: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>Additional Expertise</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap'}}>
          {/* DevOps Card */}
          <div style={{background: '#192235', borderRadius: 18, padding: '36px 32px', minWidth: 300, maxWidth: 360, flex: 1, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{background: '#232e41', color: '#7b8cff', borderRadius: 16, padding: 18, fontSize: 36, marginBottom: 18, display: 'inline-block'}}>📊</span>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: 8, letterSpacing: 1}}><span style={{fontWeight: 700}}>Project Management</span></div>
            <div style={{color: '#bfc9da', fontSize: 16}}></div>
          </div>
          {/* Version Control Card */}
          <div style={{background: '#192235', borderRadius: 18, padding: '36px 32px', minWidth: 300, maxWidth: 360, flex: 1, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{background: '#232e41', color: '#7b8cff', borderRadius: 16, padding: 18, fontSize: 36, marginBottom: 18, display: 'inline-block'}}>💬</span>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: 8, letterSpacing: 1}}><span style={{fontWeight: 700}}>Communication</span></div>
            <div style={{color: '#bfc9da', fontSize: 16}}></div>
          </div>
          {/* Graphic Designer Card */}
          <div style={{background: '#192235', borderRadius: 18, padding: '36px 32px', minWidth: 300, maxWidth: 360, flex: 1, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span style={{background: '#232e41', color: '#7b8cff', borderRadius: 16, padding: 18, fontSize: 36, marginBottom: 18, display: 'inline-block'}}>🤝</span>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: 8, letterSpacing: 1}}><span style={{fontWeight: 700}}>Teamwork and Adaptability</span></div>
            <div style={{color: '#bfc9da', fontSize: 16}}></div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" style={{background: '#131c2a', padding: '60px 0 80px 0'}}>
        <h2 style={{textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: '2.5rem', marginBottom: 48}}>Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: 40,
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          {/* Project Card 1 */}
          <div style={{background: '#232e41', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column'}}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="PeerFund UI/UX Design" style={{width: '100%', height: 220, objectFit: 'cover'}} />
            <div style={{padding: '28px 24px 18px 24px'}}>
              <div style={{color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: 10}}>Hypervisor Deployment</div>
              <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 18}}>
                An automated hypervisor deployment solution for enterprise cloud environments.
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <a href="https://gitlab.com/cloudchuck/kvm_deplyoment" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}><Tag>Link</Tag></a>
                
               
              </div>
            </div>
          </div>
          {/* Project Card 2 */}
          <div style={{background: '#232e41', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column'}}>
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="JavaScript Design Project" style={{width: '100%', height: 220, objectFit: 'cover'}} />
            <div style={{padding: '28px 24px 18px 24px'}}>
              <div style={{color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: 10}}>Multi/Hybrid Cloud Management Platform</div>
              <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 18}}>
                An single platform for managing both on-premise and hybrid cloud Infrastructure.
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <a href="https://gitlab.com/cloudchuck/cloud_manager_stack.git" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}><Tag>Link</Tag></a>
              
              
              </div>
            </div>
          </div>
          {/* Project Card 3 */}
          <div style={{background: '#232e41', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column'}}>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Mobile Marketing App" style={{width: '100%', height: 220, objectFit: 'cover'}} />
            <div style={{padding: '28px 24px 18px 24px'}}>
              <div style={{color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: 10}}>Terraform VM Deployment</div>
              <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 18}}>
                A fast and automated way to deploy virtual machines in a private hybrid cloud environment.
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                <a href="https://github.com/ChuckyCharles/Multi-Huybrid_Cloud_Manager.git" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}><Tag>Link</Tag></a>
              </div>
            </div>
          </div>
          {/* Project Card 4 */}
          <div style={{background: '#232e41', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', display: 'flex', flexDirection: 'column'}}>
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Portfolio Website" style={{width: '100%', height: 220, objectFit: 'cover'}} />
            <div style={{padding: '28px 24px 18px 24px'}}>
              <div style={{color: '#fff', fontWeight: 700, fontSize: '1.25rem', marginBottom: 10}}>Voting App On OpenShift</div>
              <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 18}}>
                A containerised voting application deployed on Redhat OpenShift Service on AWS (ROSA).
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
              <a href="https://github.com/ChuckyCharles/Voting_App_Openshift" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}><Tag>Link</Tag></a>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" style={{background: '#0a1623', padding: '60px 0 80px 0'}}>
        <h2 style={{textAlign: 'center', color: '#fff', fontWeight: 700, fontSize: '2.5rem', marginBottom: 48}}>Get in Touch</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 40,
          flexWrap: 'wrap',
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          {/* Contact Info Cards */}
          <div style={{flex: 1, minWidth: 340, maxWidth: 500, display: 'flex', flexDirection: 'column', gap: 32}}>
            <div style={{display: 'flex', gap: 32}}>
              {/* Email Card */}
              <div style={{background: '#313d4f', borderRadius: 18, flex: 1, padding: '36px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.10)'}}>
                <span style={{background: '#353fa8', color: '#fff', borderRadius: '50%', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 18}}>✉️</span>
                <div style={{color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: 6}}>Email</div>
                <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 12}}>ochiengcharles531@gmail.com</div>
                <a href="mailto:ochiengcharles531@gmail.com" style={{color: '#7b8cff', fontWeight: 500, fontSize: 16, textDecoration: 'none'}}>Send Email</a>
              </div>
              {/* Phone Card */}
              <div style={{background: '#313d4f', borderRadius: 18, flex: 1, padding: '36px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.10)'}}>
                <span style={{background: '#353fa8', color: '#fff', borderRadius: '50%', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 18}}>📞</span>
                <div style={{color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: 6}}>Phone</div>
                <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 12}}>+254718166201</div>
                <a href="tel:+254718166201" style={{color: '#7b8cff', fontWeight: 500, fontSize: 16, textDecoration: 'none'}}>Call Now</a>
              </div>
            </div>
            {/* Location Card */}
            <div style={{background: '#313d4f', borderRadius: 18, padding: '36px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.10)'}}>
              <span style={{background: '#353fa8', color: '#fff', borderRadius: '50%', width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, marginBottom: 18}}>📍</span>
              <div style={{color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: 6}}>Location</div>
              <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 12}}>Nairobi, Kenya</div>
              <a href="https://www.google.com/maps/place/Nairobi,+Kenya" target="_blank" rel="noopener noreferrer" style={{color: '#7b8cff', fontWeight: 500, fontSize: 16, textDecoration: 'none'}}>View on Map</a>
            </div>
          </div>
          {/* Contact Form Card */}
          <div style={{flex: 1, minWidth: 340, maxWidth: 500, background: '#313d4f', borderRadius: 18, padding: '36px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.10)'}}>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: 8}}>Send Message</div>
            <div style={{color: '#bfc9da', fontSize: 16, marginBottom: 24}}>Feel free to reach out to me for any inquiries or collaboration opportunities.</div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div style={{display: 'flex', alignItems: 'center', background: '#232e41', borderRadius: 8, marginBottom: 18, padding: '0 12px'}}>
                <span style={{color: '#7b8cff', fontSize: 18, marginRight: 8}}></span>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 16, padding: '16px 0', flex: 1}} 
                />
              </div>
              <div style={{display: 'flex', alignItems: 'center', background: '#232e41', borderRadius: 8, marginBottom: 18, padding: '0 12px'}}>
                <span style={{color: '#7b8cff', fontSize: 18, marginRight: 8}}></span>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required
                  style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 16, padding: '16px 0', flex: 1}} 
                />
              </div>
              <div style={{display: 'flex', alignItems: 'center', background: '#232e41', borderRadius: 8, marginBottom: 18, padding: '0 12px'}}>
                <span style={{color: '#7b8cff', fontSize: 18, marginRight: 8}}></span>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Number" 
                  required
                  style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 16, padding: '16px 0', flex: 1}} 
                />
              </div>
              <div style={{display: 'flex', alignItems: 'flex-start', background: '#232e41', borderRadius: 8, marginBottom: 24, padding: '12px'}}>
                <span style={{color: '#7b8cff', fontSize: 18, marginRight: 8, marginTop: 4}}></span>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  required
                  rows={4} 
                  style={{background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 16, flex: 1, resize: 'none'}} 
                />
              </div>
              {submitStatus === 'success' && (
                <div style={{color: '#4CAF50', marginBottom: 16, textAlign: 'center'}}>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{color: '#f44336', marginBottom: 16, textAlign: 'center'}}>
                  Failed to send message. Please try again later.
                </div>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{
                  width: '100%', 
                  background: isSubmitting ? '#4a4a4a' : '#6366f1', 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: 18, 
                  border: 'none', 
                  borderRadius: 10, 
                  padding: '16px 0', 
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: 10
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// SkillBar component
function SkillBar({ label, color, percent, icon }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          {icon}
          <span style={{
            color: '#bfc9da',
            fontSize: 'clamp(0.875rem, 2vw, 1rem)'
          }}>{label}</span>
        </div>
        <span style={{
          color: color,
          fontWeight: 600,
          fontSize: 'clamp(0.875rem, 2vw, 1rem)'
        }}>{percent}%</span>
      </div>
      <div style={{
        width: '100%',
        height: 'clamp(6px, 1vw, 8px)',
        background: '#232e41',
        borderRadius: 'clamp(3px, 0.5vw, 4px)',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${percent}%`,
          height: '100%',
          background: color,
          borderRadius: 'clamp(3px, 0.5vw, 4px)',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
}

// Tag component
function Tag({children}) {
  return (
    <span style={{background: '#363e54', color: '#7b8cff', borderRadius: 16, padding: '6px 18px', fontSize: 15, fontWeight: 500, letterSpacing: 0.5, marginBottom: 6, display: 'inline-block'}}>{children}</span>
  );
}

export default Home; 