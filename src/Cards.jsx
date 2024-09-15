

// export default function Cards({ imageUrl, headerImageUrl, score, location, count, title, amount }) {
//   return (
//     <div className="cards">
//       <img src={imageUrl} className="header--img" alt="Card" />
//       <div className="content">
//         <div className="ratings">
//           <img src={headerImageUrl} className="img-1" alt="Rating Star" />
//           <span>{score}</span>
//           <span className="gray"> ({count})</span>
//           <span className="gray">, {location}</span>
//         </div>
//         <h4>{title}</h4>
//         <p className="gray"><b>From ${amount}</b> /person</p>
//       </div>
//     </div>
//   );
// }
export default function Cards(props){
console.log(props);
return(
  <div className="cards">
       <img src={props.imageUrl} className="header--img" alt="Card" />
       <div className="content">
         <div className="ratings">
           <img src={props.headerImageUrl} className="img-1" alt="Rating Star" />
          <span>{}</span>
           <span className="gray">{props.count}</span>
           <span className="gray">, {props.location}</span>
        </div>
        <h4>{props.title}</h4>
       <p className="gray"><b>From ${props.amount}</b> /person</p>
     </div>
    </div>
)
}