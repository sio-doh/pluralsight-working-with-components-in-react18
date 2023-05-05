import { useState } from "react";

const EnhancedComponent = ({ darkTheme, toggleTheme }) => {
  // 
  return (
    <div
      className="container"
      data-theme={darkTheme ? "dark" : "light"}
      onClick={toggleTheme}
    >
      My Site
    </div>
  );
};

// THIS WITHTHEME BELOW WAS NOT COMPLETED AT THE END OF THIS MODULE.
// IT IS HERE BECAUSE WITHOUT IT, THE APP WILL NOT BUILD (NPM RUN BUILD)
// IN THE NEXT MODULE, THIS WITHTHEME HOC WILL BE BUILT OUT COMPLETELY AND
// THE CODE BELOW IS THE STARTING POINT FOR THAT.  THIS CODE BELOW SIMPLY
// TAKES IN A COMPONENT AND RETURNS THE SAME COMPONENT.
// KIND OF LIKE "newF = () => oldF()"

const App = withTheme(EnhancedComponent);

export default withTheme(App);
