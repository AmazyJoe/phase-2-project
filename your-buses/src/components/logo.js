function Logo() {
  return (
    <div>
      <img
        src="./Assets/logo.png"
        alt="blue bus"
        style={{
          
          borderRadius: '25px', 
          position: 'absolute', 
          top: '2%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)'
        }} 
      />
    </div>
  );
}
export default Logo;
