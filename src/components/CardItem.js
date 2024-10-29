function CardItem({item}) {
            return (
                <>
             <div className="col-md-3 mb-4 "> {/* Change col-md-4 to col-md-3 for a smaller card */}
    <div className="card">
        <div className="position-relative">
            <img src={item.image} className="card-img-top" alt="Card image" />
            <div className="card-body">
                <div className="btn btn-primary d-block w-100 bg-black text-white border-0">
                    Add To Cart
                </div>
                <h5 className="card-title text-start">{item.name}</h5>
                <p className="card-text text-start">${item.price}</p>
            </div>
                
        </div>
    </div>
</div>

              </>
            );
          
        }
          
    
  
  export default CardItem;