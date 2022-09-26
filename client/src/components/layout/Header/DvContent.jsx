import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
function DvContent() {
    const [items, setItems] = useState([]);
    
    return (
        <div className="">
            {items.map((item, index) => {
                return (
                    <ul className="" key={index}>
                        <li className="">{item.title}</li>
                        {item.contents.map((content, index) => {
                            return (
                                <li className="" key={index}>
                                    <Link to="/">{content.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                );
            })}
        </div>
    );
}

export default DvContent;
