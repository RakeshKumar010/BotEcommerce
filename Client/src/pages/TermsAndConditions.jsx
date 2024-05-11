import React from "react";
import Footer from "../components/global/Footer";
import HeaderTop from "../components/HeaderTop";
import NavBar from "../components/global/NavBar";

const TermsAndConditions = () => {
  return (
    <>
      <div className="sticky top-0 z-10 right-0 left-0 ">
        <HeaderTop />
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded shadow-md w-3/4">
          <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
          <p className="mb-2">
            Welcome to <strong>CartCraze</strong>! These terms and conditions
            outline the rules and regulations for the use of our website.
          </p>
          <p className="mb-2">
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use CartCraze if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
          <p className="mb-2">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company’s terms and conditions.
          </p>
          <p className="mb-2">
            "The Company", "Ourselves", "We", "Our" and "Us", refers to our
            Company. "Party", "Parties", or "Us", refers to both the Client and
            ourselves.
          </p>
          <p className="mb-2">
            All terms refer to the offer, acceptance and consideration of
            payment necessary to undertake the process of our assistance to the
            Client in the most appropriate manner for the express purpose of
            meeting the Client’s needs in respect of provision of the Company’s
            stated services, in accordance with and subject to, prevailing law
            of Netherlands.
          </p>
          <p className="mb-2">
            Any use of the above terminology or other words in the singular,
            plural, capitalization and/or he/she or they, are taken as
            interchangeable and therefore as referring to same.
          </p>
          <p className="mb-2">
            We employ the use of cookies. By accessing CartCraze, you agreed to
            use cookies in agreement with the CartCraze's Privacy Policy.
          </p>
          <p className="mb-2">
            Most interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website.
          </p>
          <p className="mb-2">
            Some of our affiliate/advertising partners may also use cookies.
          </p>
          <p className="mb-2">
            Unless otherwise stated, CartCraze and/or its licensors own the
            intellectual property rights for all material on CartCraze. All
            intellectual property rights are reserved.
          </p>
          <p className="mb-2">
            You may access this from CartCraze for your own personal use
            subjected to restrictions set in these terms and conditions.
          </p>
          <p className="mb-2">
            You must not:
            <ul className="list-disc list-inside">
              <li>Republish material from CartCraze</li>
              <li>Sell, rent or sub-license material from CartCraze</li>
              <li>Reproduce, duplicate or copy material from CartCraze</li>
              <li>Redistribute content from CartCraze</li>
            </ul>
          </p>
          <p className="mb-2">This Agreement shall begin on the date hereof.</p>
          <p className="mb-2">
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            CartCraze does not filter, edit, publish or review Comments prior to
            their presence on the website.
          </p>
          <p className="mb-2">
            Comments do not reflect the views and opinions of CartCraze,its
            agents and/or affiliates. Comments reflect the views and opinions of
            the person who post their views and opinions.
          </p>
          <p className="mb-2">
            To the extent permitted by applicable laws, CartCraze shall not be
            liable for the Comments or for any liability, damages or expenses
            caused and/or suffered as a result of any use of and/or posting of
            and/or appearance of the Comments on this website.
          </p>
          <p className="mb-2">
            CartCraze reserves the right to monitor all Comments and to remove
            any Comments which can be considered inappropriate, offensive or
            causes breach of these Terms and Conditions.
          </p>
          <p className="mb-2">
            You warrant and represent that:
            <ul className="list-disc list-inside">
              <li>
                You are entitled to post the Comments on our website and have
                all necessary licenses and consents to do so;
              </li>
              <li>
                The Comments do not invade any intellectual property right,
                including without limitation copyright, patent or trademark of
                any third party;
              </li>
              <li>
                The Comments do not contain any defamatory, libelous, offensive,
                indecent or otherwise unlawful material which is an invasion of
                privacy
              </li>
              <li>
                The Comments will not be used to solicit or promote business or
                custom or present commercial activities or unlawful activity.
              </li>
            </ul>
          </p>
          <p className="mb-2">
            You hereby grant CartCraze a non-exclusive license to use,
            reproduce, edit and authorize others to use, reproduce and edit any
            of your Comments in any and all forms, formats or media.
          </p>
          <p className="mb-2">
            If you have any questions about our Terms and Conditions, please
            contact us. Our customer service team is always ready to help!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
