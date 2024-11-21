function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="text-center py-16 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Adaab, I'm Siddiqui</h1>
        <p className="text-xl font-light mb-6">
          Software Engineer | Cybersecurity Advocate | Creator of CyberMentor
        </p>
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Siddiqui Adaab"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-lg max-w-3xl mx-auto px-4 mb-8">
          As a software engineer passionate about cybersecurity, I noticed that
          there wasn't a single platform dedicated to cybersecurity education,
          specifically tailored to the curriculum introduced by the Maharashtra
          State Board. That's when I decided to create **CyberMentor**, a
          platform focused on providing centralized, comprehensive learning
          resources for cybersecurity students.
        </p>
      </section>

      {/* Motivation Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">
            Why I Created CyberMentor
          </h2>
          <p className="text-lg leading-relaxed">
            As a software engineer, I realized there were limited and
            disorganized resources for learning about cybersecurity,
            particularly in the context of the Maharashtra State Board
            curriculum. Many students and professionals were struggling to find
            a platform that gathered all the relevant knowledge, certifications,
            and learning material in one place. This led to the creation of
            **CyberMentor**.
          </p>
          <p className="text-lg mt-6 leading-relaxed">
            **CyberMentor** serves as a centralized platform that provides
            students, educators, and cybersecurity enthusiasts with the
            necessary tools to learn and excel in the field. It brings together
            all the resources required for mastering cybersecurity concepts,
            achieving certifications, and honoring accomplishments in this vital
            field.
          </p>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Features of CyberMentor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Comprehensive Learning Resources
              </h3>
              <p className="text-lg">
                Access all the necessary materials and tutorials required to
                understand the core concepts of cybersecurity as per the
                Maharashtra State Board curriculum.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Certification Preparation
              </h3>
              <p className="text-lg">
                Prepare for and earn recognized certifications in cybersecurity
                that will help enhance your skills and open up professional
                opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-lg">
                Connect with other cybersecurity learners, experts, and mentors
                to foster collaboration and share knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
          <p className="text-lg mb-6">
            I believe in collaboration and open communication. If you're
            passionate about cybersecurity or would like to learn more, feel
            free to reach out or connect with me!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/siddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/siddiqui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="mailto:siddiqui@example.com"
              className="text-white hover:text-teal-400"
            >
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
