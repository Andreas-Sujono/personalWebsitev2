import React, { memo, useState } from 'react';
import logo from 'assets/Logo.png';
import divider from 'assets/footerDivider.png';
import {
  Container,
  BottomFooter,
  Row,
  FirstSection,
  SecondSection,
  ThirdSection,
} from './Styles';

function Footer() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const updateFormData = (obj) => {
    setFormData({
      ...formData,
      ...obj,
    });
  };

  const submitForm = async (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
      setFormData({
        email: '',
        name: '',
        message: '',
      });
    };
    xhr.send(data);
  };

  return (
    <Container id="footer">
      <img src={divider} className="divider" alt="before footer" />
      <Row>
        <FirstSection>
          <img src={logo} alt="Andreas logo" />
        </FirstSection>
        <SecondSection>
          <h2> Contact </h2>
          <div className="contentSection1">
            <ul>
              <li>
                <a href="https://www.facebook.com/andreas.sujono.543">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/andreassujono/">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/AndreasSujono">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.github.com/Andreas-Sujono">Github</a>
              </li>
              <li>
                <a href="mailto:Andr0075@e.ntu.edu.sg">
                  Email: Andr0075@e.ntu.edu.sg
                </a>
              </li>
            </ul>
          </div>
        </SecondSection>

        <ThirdSection>
          <h2> Want to work together? </h2>
          <div className="contentSection2">
            <div className="footerForm">
              <form
                onSubmit={submitForm}
                action="https://formspree.io/xdogvkwq"
                method="POST"
              >
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    name="email"
                    required
                    onChange={(e) => updateFormData({ email: e.target.value })}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    name="name"
                    onChange={(e) => updateFormData({ name: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    type="text"
                    placeholder="Message"
                    required
                    value={formData.message}
                    name="message"
                    onChange={(e) => {
                      updateFormData({ message: e.target.value });
                    }}
                    className="form-control"
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
                {status === 'SUCCESS' && (
                  <p className="bg-success statusMessage">
                    Thanks for contacting me!, will reply soon
                  </p>
                )}
                {status === 'ERROR' && (
                  <p className="bg-danger statusMessage">
                    There is an error! try again later
                  </p>
                )}
              </form>
            </div>
          </div>
        </ThirdSection>
      </Row>

      <BottomFooter>
        Created with&nbsp;&nbsp;
        <i className="fa fa-heart" />
        &nbsp;&nbsp;by Andreas Sujono
      </BottomFooter>
    </Container>
  );
}

export default memo(Footer);
