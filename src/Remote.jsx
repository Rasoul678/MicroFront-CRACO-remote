import Typewriter from "typewriter-effect";

const Remote = ({ isRemote = false }) => {
  return (
    <div>
      <h1>This is Remote</h1>
      {isRemote && (
        <Typewriter
          options={{
            strings: ["This is comming from remote app!"],
            autoStart: true,
            loop: true,
          }}
        />
      )}
    </div>
  );
};

export default Remote;
