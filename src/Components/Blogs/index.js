import React, { useState } from "react";
import Icon1 from "../../images/no-drinking.png";
import Icon2 from "../../images/smoking-is-Injurious-to-Health.jpeg";
import Icon3 from "../../images/Embracing_the_Power_of_Menstruation.png";
import {
  BlogsContainer,
  BlogsH1,
  BlogsH2,
  BlogsWrapper,
  BlogsCard,
  BlogsIcon,
  BlogsP,
} from "./BlogsElements";
const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
    }
  };


  const handleButtonClick = () => {
    setSearchTerm("");
  };

  const filteredBlogs = blogsData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <BlogsContainer id="Blogs">
      <div style={{ height: "150px" }}></div> {/* Add space at the beginning of the page */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          style={{
            width: "300px", // Set width to your desired value
            borderRadius: "8px",
            padding: "8px",
            // Add any other desired inline styles
          }}
        />
        <button
          className="search-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: "green", // Set background color to green
            color: "white", // Set text color to white
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          Clear
        </button>
      </div>
      <div style={{ height: "50px" }}></div>
      <BlogsWrapper>
        {filteredBlogs.map((blog, index) => (
          <BlogsCard key={index}>
            <BlogsIcon src={blog.icon} />
            <BlogsH2>
              <b>{blog.title}</b>
            </BlogsH2>
            <BlogsP>{blog.content}</BlogsP>
          </BlogsCard>
        ))}
      </BlogsWrapper>
    </BlogsContainer>
  );
};

export default Blogs;
const blogsData = [
  {
    icon: Icon1,
    title: "5 Sophisticated Non-Alcoholic Cocktails to try on your Date Night",
    content:
      "For those looking for a more sober option, alcohol-free cocktails can be the perfect way to give your evening a touch of sophistication.",
  },
  {
    icon: Icon2,
    title: "What Smoking Does to Your Body",
    content:
      "Did you know long-term smoking and vaping can lead to many health issues like high blood pressure, strokes, heart conditions, and various forms of cancer? Smoking and vaping can also cause blockages in your body.",
  },
  {
    icon: Icon1,
    title: "Isolation – the secret enemy",
    content:
      "Nature is ideal for lowering stress levels, but it’s also a great way to remind yourself there’s a whole world out there and it can be comforting to see the bigger picture when we step outside our bubbles.",
  },
  {
    icon: Icon1,
    title: "Learning how to say no",
    content:
      "As well as fear, people can sniff out indecision, so you need to make sure that your rebuttal to why you aren’t drinking is both confident and watertight. It doesn’t need to be lengthy.",
  },
  {
    icon: Icon3,
    title: "Embracing the Power of Menstruation",
    content: "Menstruation involves destigmatizing it, recognizing its significance, advocating for menstrual health, and challenging societal norms to celebrate the strength and beauty of women's bodies.",
  },
];