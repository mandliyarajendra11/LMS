
const mpp=[
    {
        id:1,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },
    {
        id:2,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },
    {
        id:3,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },
    {
        id:4,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },
    {
        id:5,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },
    {
        id:6,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },
    {
        id:7,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },{
        id:8,
        name:"book name",
        para:"by raju bhai",
        img:"./img/download.jpg",
        price:3290
    },
]
const MP=mpp.map((e)=>{
    return <div >
         <img src={e.img} alt="book" className="book" />
      <h5 key={Math.random()*10}>{e.title}</h5>
      <p>publisher: by rajendra</p>
      <p>&#8377;150</p>
      <a className='btn' href={`raj.com`} target="_blank" rel='noreferrer' >preview</a>
      
    </div>})
export default MP;