import React from "react";
import ProductCard from "../components/product/ProductCard.jsx";
import ForumCard from "../components/forum/forumCard.jsx";
import ResearchCard from "../components/research/ResearchCard.jsx";
import cardSet1 from "../data/cards-set-1.json";
import cardSet2 from "../data/cards-set-2.json";
import cardSet3 from "../data/cards-set-3.json";
import fetchCards from "../services/mockApi.js";

export default function List() {

    const data = fetchCards();

    console.log('data length', data.length)

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
      

    {data.map((card, index) => {

        
        if (card.type === "product") {
            
            return <ProductCard key={index} data={card}/>;
        }
        if (card.type === "forum") {
            return <ForumCard key={index} data={card}/>;
        }
        if (card.type === "research") {
            return <ResearchCard key={index} data={card}/>;
        }

        
      })}

     
    </div>
  );
}
