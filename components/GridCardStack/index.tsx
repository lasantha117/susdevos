// components/CardStack/index.tsx
import React from 'react';
import Card from './GCard';

const CardStack: React.FC = () => {
    // Dummy data for cards
    const cardDataArray = [
        {
            title: 'Card 1 Title',
            description: 'Description for Card 1',
            imageSrc: 'https://sambadenglish.com/wp-content/uploads/2020/11/Plan-A-Short-Vacation-to-These-Destinations-From-India-This-Festive-Season-750x430.png',
        },
        {
            title: 'Card 2 Title',
            description: 'Description for Card 2',
            imageSrc: 'https://sambadenglish.com/wp-content/uploads/2020/11/Plan-A-Short-Vacation-to-These-Destinations-From-India-This-Festive-Season-750x430.png',
        },
        {
            title: 'Card 3 Title',
            description: 'Description for Card 3',
            imageSrc: 'https://sambadenglish.com/wp-content/uploads/2020/11/Plan-A-Short-Vacation-to-These-Destinations-From-India-This-Festive-Season-750x430.png',
        },
        {
            title: 'Card 4 Title',
            description: 'Description for Card 4',
            imageSrc: 'https://sambadenglish.com/wp-content/uploads/2020/11/Plan-A-Short-Vacation-to-These-Destinations-From-India-This-Festive-Season-750x430.png',
        },
        {
            title: 'Card 4 Title',
            description: 'Description for Card 4',
            imageSrc: 'https://sambadenglish.com/wp-content/uploads/2020/11/Plan-A-Short-Vacation-to-These-Destinations-From-India-This-Festive-Season-750x430.png',
        },
        {
            title: 'Card 4 Title',
            description: 'Description for Card 4',
            imageSrc: 'https://sambadenglish.com/wp-content/uploads/2020/11/Plan-A-Short-Vacation-to-These-Destinations-From-India-This-Festive-Season-750x430.png',
        },
    ];

    return (
        <div className="bg-slate-200" >
            <h2 className="text-xl font-semibold mb-2 ">Section Title</h2>
            <p className="text-gray-700 lg:text-2xl md:text-xl mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ipsa fuga! Perferendis accusantium dolorem alias maiores, odit molestias blanditiis, illum, quae vitae eligendi aspernatur magnam aliquam eaque nemo placeat. Temporibus!</p>
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center container">
                {/* Loop through yourArray and render a Card for each item */}
                {cardDataArray.map((cardData, index) => (
                    <Card key={index} cardData={cardData} />
                ))}
            </div>
        </div>
    );
};

export default CardStack;
