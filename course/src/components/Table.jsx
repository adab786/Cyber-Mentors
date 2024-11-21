import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import App from "../App";

function Table() {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem("myData");
    return savedProgress ? parseInt(savedProgress, 10) : 0;
  });
  const boxes = document.querySelectorAll(".checkbox:checked");
  // console.log(boxes);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }

  useEffect(() => {
    localStorage.setItem("myData", progress);
  }, [progress, boxes]);

  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      progressBar.value = progress;
    }
  }, [progress]);

  const handleCheckboxClick = () => {
    const progressBar = document.getElementById("progress-bar");
    const totalCheckboxes = document.querySelectorAll(".checkbox").length;
    const checkedCheckboxes =
      document.querySelectorAll(".checkbox:checked").length;

    const newProgress = Math.round((checkedCheckboxes / totalCheckboxes) * 100);
    progressBar.value = newProgress;
    setProgress(newProgress);
  };

  // Ensure the DOM is fully loaded before attaching event listeners
  useEffect(() => {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", handleCheckboxClick);
    });

    // Cleanup event listeners when the component is unmounted
    return () => {
      checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener("click", handleCheckboxClick);
      });
    };
  }, []);

  if (progress === 100) {
    toast("You have completed the course  🎉");
    // return <Navigate to="/certification" />;
  }

  return (
    <div className=" mt-5 font-mono">
      <ToastContainer />
      <div className="m-6   ">
        <label htmlFor="progress-bar" className="block h-5  mb-2">
          Progress:{progress}%
        </label>
        <progress
          id="progress-bar"
          className="progress progress-warning w-full"
          value="0"
          max="100"
        ></progress>
      </div>

      {/* Table */}
      <div className="overflow-x-auto m-6 text-white">
        <table className="table  bg-transparent">
          <thead>
            <tr className=" font-bold text-2xl text-white">
              <th>Status</th>
              <th>Chap</th>
              <th>Content</th>
              <th>Imps</th>
              <th className="hidden md:table-cell">Note</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-blue-500" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://loremflickr.com/320/240"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      1.Introduction to Ethical Hacking
                    </div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                <ul className="list-decimal list-inside space-y-2">
                  <li>Fundamentals of Computer Networks/IP Protocol Stack</li>
                  <li>IP Addressing and Routing</li>
                  <li>Routing Protocol</li>
                  <li>Protocol Vulnerabilities</li>
                  <li>Steps of Ethical Hacking</li>
                  <li>
                    Demonstration of Routing Protocols using Cisco Packet Tracer
                  </li>
                </ul>
              </td>
              <td>
                <li>
                  <Link
                    className="underline"
                    to="https://www.geeksforgeeks.org/tcp-ip-in-computer-networking/"
                  >
                    TCP/IP ↗️
                  </Link>
                </li>
                <br />
                <li>
                  <Link
                    className="underline"
                    to="https://www.tutorialspoint.com/ethical_hacking/ethical_hacking_process.htm"
                  >
                    STEPS ↗️
                  </Link>
                </li>
              </td>
              <th>
                <button className="btn w-52 btn-ghost hidden md:table-cell btn-xs">
                  MAXIMUM PART OF THIS CHAPS WILL BE COVERED IN COMPUTER NETWORK
                </button>
              </th>
            </tr>
            {/*  row2 ... */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-blue-500" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://loremflickr.com/320/240"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      2.Introduction to Cryptography
                    </div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                <ul className="list-decimal list-inside space-y-2">
                  <li>Private-key encryption</li>
                  <li>Public key encryption</li>
                  <li>Key Exchange Protocols</li>
                  <li>Cryptographic Hash Functions & applications</li>
                  <li>Steganography</li>
                  <li>Biometric authentication</li>
                  <li>Lightweight cryptographic algorithms</li>
                  <li>
                    Demonstration of various cryptographic tools and hashing
                    algorithms
                  </li>
                </ul>
              </td>
              <td>
                <ul className="list-decimal list-inside space-y-2">
                  <li>
                    <strong>
                      Difference between Private key and Public key:
                    </strong>
                    <a
                      className="underline"
                      href="https://www.geeksforgeeks.org/difference-between-private-key-and-public-key/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </li>
                  <li>
                    <strong>Key Exchange Protocols:</strong>
                    <a
                      className="underline"
                      href="https://www.ibm.com/docs/en/zos/2.3.0?topic=communication-key-exchange-protocol"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </li>
                  <li>
                    <strong>What is steganography?</strong>
                    <a
                      className="underline"
                      href="https://www.techtarget.com/searchsecurity/definition/steganography"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </li>
                  <li>
                    <strong>What is biometric authentication?</strong>
                    <a
                      className="underline"
                      href="https://www.techtarget.com/searchsecurity/definition/biometric-authentication#:~:text=Biometric%20authentication%20is%20a%20security,authentic%20data%20in%20a%20database."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </li>
                  <li>
                    <strong>Cryptographic tools:</strong>
                    <a
                      className="underline"
                      href="https://github.com/topics/cryptography-tools"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </li>
                </ul>
              </td>
              {/* <th>
                <button className="btn w-52 btn-ghost hidden md:table-cell btn-xs">
                  MAXIMUM PART OF THIS CHAPS WILL BE COVERED IN COMPUTER NETWORK
                </button>
              </th> */}
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-blue-500" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://loremflickr.com/320/240"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      3.Introduction to network security
                    </div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                <ul className="list-decimal list-inside space-y-2">
                  <li>Information gathering</li>
                  <li>Reconnaissance</li>
                  <li>Scanning</li>
                  <li>Vulnerability assessment</li>
                  <li>OpenVAS</li>
                  <li>Nessus</li>
                  <li>System hacking: Password cracking</li>
                  <li>Penetration testing</li>
                  <li>Social engineering attacks</li>
                  <li>Malware threats</li>
                  <li>Hacking wireless networks (WEP, WPA, WPA2)</li>
                  <li>Proxy network</li>
                  <li>VPN security</li>
                  <li>
                    Study of various tools for Network Security such as
                    Wireshark, John the Ripper, Metasploit, etc.
                  </li>
                </ul>
              </td>
              <td>
                <ul className="list-decimal list-inside space-y-2">
                  <li>
                    <Link
                      className="underline"
                      to="https://www.geeksforgeeks.org/kali-linux-information-gathering-tools/"
                    >
                      Footprinting,Scanning,Enumeration,Reconnaissance
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="underline "
                      to="https://www.techtarget.com/searchsecurity/definition/password-cracker#:~:text=Password%20cracking%20is%20the%20process,obtain%20unauthorized%20access%20to%20resources"
                    >
                      Password cracking
                    </Link>
                  </li>
                  <li>
                    <Link className="underline " to="https://www.openvas.org/">
                      OpenVAS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline "
                      to="https://github.com/openwall/john"
                    >
                      John the Ripper tool
                    </Link>
                  </li>
                </ul>
              </td>
              {/* <th>
                <button className="btn w-52 btn-ghost hidden md:table-cell btn-xs">
                  MAXIMUM PART OF THIS CHAPS WILL BE COVERED IN COMPUTER NETWORK
                </button>
              </th> */}
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-blue-500" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://loremflickr.com/320/240"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      4.Introduction to web security and Attacks
                    </div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                <ul className="list-disc list-inside space-y-2">
                  <li>OWASP</li>
                  <li>Web Security Considerations</li>
                  <li>User Authentication</li>
                  <li>Cookies</li>
                  <li>SSL</li>
                  <li>HTTPS</li>
                  <li>Privacy on Web</li>
                  <li>Account Harvesting</li>
                  <li>Web Bugs</li>
                  <li>Sniffing</li>
                  <li>ARP Poisoning</li>
                  <li>Denial of Service Attacks</li>
                  <li>Hacking Web Applications</li>
                  <li>Clickjacking</li>
                  <li>Cross-Site Scripting and Request Forgery</li>
                  <li>Session Hijacking and Management</li>
                  <li>Phishing and Pharming Techniques</li>
                  <li>SSO</li>
                  <li>Vulnerability Assessments</li>
                  <li>SQL Injection</li>
                  <li>Web Service Security</li>
                  <li>OAuth 2.0</li>
                  <li>
                    Demonstration of Hacking Tools on Kali Linux such as SQLMap,
                    HTTrack, hping, burp suite, Wireshark, etc.
                  </li>
                </ul>
              </td>
              <td>
                <ul className="list-decimal list-inside space-y-2">
                  <li>
                    <Link
                      className="underline"
                      to="https://www.cloudflare.com/learning/security/threats/owasp-top-10/"
                    >
                      What is OWASP? What is the OWASP Top 10?
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="underline "
                      to="https://www.imperva.com/learn/application-security/penetration-testing/"
                    >
                      Penetration Testing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline "
                      to="https://www.cisco.com/site/in/en/learn/topics/security/what-is-malware.html#:~:text=Malware%20is%20intrusive%20software%20that,spyware%2C%20adware%2C%20and%20ransomware"
                    >
                      Social Engineering
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline "
                      to="https://www.geeksforgeeks.org/web-security-considerations/"
                    >
                      What Is Malware?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline "
                      to="https://www.geeksforgeeks.org/web-security-considerations/"
                    >
                      Web Security Considerations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline "
                      to="https://www.kaspersky.com/resource-center/definitions/cookies"
                    >
                      What are Cookies?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline "
                      to="https://www.techtarget.com/searchsecurity/definition/single-sign-on"
                    >
                      single sign-on (SSO)
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="underline "
                      to="https://github.com/adab786/cyber_security/blob/main/WhatsApp%20Image%202022-12-06%20at%2011.38.28%20PM.jpeg"
                    >
                      WEB BUG USAGE
                    </Link>
                  </li>
                </ul>
              </td>
              {/* <th>
                <button className="btn w-52 btn-ghost hidden md:table-cell btn-xs">
                  MAXIMUM PART OF THIS CHAPS WILL BE COVERED IN COMPUTER NETWORK
                </button>
              </th> */}
            </tr>
            {/* row 5 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox border-blue-500" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://loremflickr.com/320/240"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      5 Elements of Hardware Security
                    </div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>
                <ul className="list-disc list-inside space-y-2">
                  <li>Side Channel Attacks</li>
                  <li>Physical Unclonable Functions</li>
                  <li>Firewalls</li>
                  <li>Backdoors and Trapdoors</li>
                  <li>Demonstration of Side Channel Attacks on RSA</li>
                  <li>IDS and Honeypots</li>
                </ul>
              </td>
              <td>
                <li>
                  <Link
                    className="underline"
                    to="https://github.com/adab786/cyber_security/blob/main/CyberSecurity_Hardware%20Security-1%20(1)%20(1).pdf"
                  >
                    All ↗️
                  </Link>
                </li>
                <br />
              </td>
              <th>
                <button className="btn w-52 btn-ghost hidden md:table-cell btn-xs">
                  Every topic is important
                </button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <td
                colSpan="5"
                className="text-center text-2xl text-white tracking-widest font-mono"
              >
                Lets.... Hack
              </td>
              <p> PS: Developer is cat lover 😄</p>
              {/* <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th> */}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Table;
