import React from "react";

function About() {
  return (
    <div className="container mx-auto p-4 select-none	">
      <div className="p-2 tracking-wide">
        <p>
          <span className="font-semibold">Hey there, </span> <br />
          This is Satyam sinha, Software developer at
          <span className="font-semibold italic">
            {" "}
            Navigators software pvt ltd
          </span>
          . I started my coding journey on August 15th 2018. I had a huge
          interest since my childhood on building something that`s being used by
          a lot of people and can add value to their lives. And when I got first
          introduced to programming my intrest got a way to expand and I started
          working on it day and night.First I started learning free from Youtube
          videos.{" "}
          <span className="font-bold">
            (Big shout out to Mysirg, Code with harry and Hitesh Chowdhary
            Youtube channels)
          </span>{" "}
          After I learned some basic fundamentals of programming, I started
          working on few projects (which now looks crappy to me 🤣🤣🤣🤣).
        </p>
        <p>
          After working on some projects, I realised that things are not going
          in my favour 😔😔... Because I was knowing the basic concepts of
          programming but lacking the industry standard best practices and
          trends. I think that learning from youtube videos are great but there
          is a con that there is so much distractions comming your way. So I
          decided to go for some paid courses on udemy, learn code online etc.
          From those courses I started learning and building awsome projects.
          After completing those courses by following along with the instructor,
          I was getting inspiration to build some projects on my own and I did
          that. Finally landed a fulltime job in a good startup{" "}
          <a
            href="http://www.colorbracket.com/"
            target="_blank"
            rel="noreferrer"
          >
            Colorbracket technologies
          </a>
          . In that company I build an entire pick and drop system for chennai
          client and few more projects which gave me a lot of confidence that I
          can build exciting projects on my own.
        </p>
        <p>
          After that I left Colorbracket in one year looking for better
          oopurtunities there and now I am working in this awesome company
          hoping for best.
        </p>
      </div>
      <div id="experience">
        <div className="container  mx-auto p-4">
          <span className="font-semibold">My Experiences</span>
          <table class="table-auto w-full mt-4">
            <thead className="bg-slate-800	 text-white">
              <tr>
                <th className="px-2 py-2">S.No</th>
                <th className="px-2 py-2">Company Name</th>
                <th className="px-2 py-2">Tenure</th>
                <th className="px-2 py-2">CTC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-600	 text-white">
                <td className="text-center">1</td>
                <td className="text-center">Colorbracket technologies LLP</td>
                <td className="text-center">2020-2022</td>
                <td className="text-center">1.9 LPA</td>
              </tr>
              <tr className="bg-gray-500 text-white">
                <td className="text-center">2</td>
                <td className="text-center">Navigators software pvt ltd</td>
                <td className="text-center">2022-present</td>
                <td className="text-center">3.8 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="education">
        <div className="container  mx-auto p-4">
          <span className="font-semibold">Educational background</span>
          <table class="table-auto w-full mt-4">
            <thead className="bg-slate-800	 text-white">
              <tr>
                <th className="px-2 py-2">S.No</th>
                <th className="px-2 py-2">Board Name</th>
                <th className="px-2 py-2">Standard</th>
                <th className="px-2 py-2">Tenure</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-600 text-white">
                <td className="text-center">1</td>
                <td className="text-center">MAKAUT</td>
                <td className="text-center">BCA</td>
                <td className="text-center">2019-2022</td>
              </tr>
              <tr className="bg-gray-500 text-white">
                <td className="text-center">2</td>
                <td className="text-center">KNU</td>
                <td className="text-center">Math Honours</td>
                <td className="text-center">2015-2018</td>
              </tr>
              <tr className="bg-gray-600 text-white">
                <td className="text-center">3</td>
                <td className="text-center">WBBCHSE</td>
                <td className="text-center">XII</td>
                <td className="text-center">2013-2015</td>
              </tr>
              <tr className="bg-gray-500	 text-white">
                <td className="text-center">4</td>
                <td className="text-center">WBBSE</td>
                <td className="text-center">X </td>
                <td className="text-center">2012 -2013</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
