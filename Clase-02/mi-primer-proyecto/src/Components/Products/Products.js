let Banner = () => {
    return(

      <div className="externalContainerSection">
        <div className="internalContainerSection">

          <div className="containerProduct">
            <div className="imageNameContainer">
              <h1>Product 1</h1>
            </div>
            <div className="imageProductContainer">
                <img src="/Images/image1.jpg"  className="imageProduct"/>
            </div>
            <div className="priceProduct">
              <p>$300</p>
            </div>
          </div>

          <div className="containerProduct">
            <div className="imageNameContainer">
            <h1>Product 2</h1>
            </div>
            <div className="imageProductContainer">
                <img src="/Images/image2.jpg"  className="imageProduct"/>
            </div>
            <div className="priceProduct">
            <p>$600</p>
            </div>
          </div>

          <div className="containerProduct">
            <div className="imageNameContainer">
            <h1>Product 3</h1>
            </div>
            <div className="imageProductContainer">
                <img src="/Images/image3.jpg" className="imageProduct"/>
            </div>
            <div className="priceProduct">
            <p>$400</p>
            </div>
          </div>

        </div>

      </div>

    )
}

export default Banner;