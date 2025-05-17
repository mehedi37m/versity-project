import Ballpit from "../../../Reactbits/Ballpit/Ballpit";




const Live = () => {
    return (
        <div>
          

<div className="text-5xl">hello</div>

<div style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
  <Ballpit  count={200}
    gravity={0.7}
    friction={0.8}
    wallBounce={0.95}
    followCursor={true}></Ballpit>
</div>
        </div>
    );
};

export default Live;