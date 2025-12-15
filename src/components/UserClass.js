import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default location",
        avatar_url:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAMFBMVEXk5ueutLeor7Lf4uPn6eqrsbXDyMrd3+G7wMO3vL/P0tSyuLvJzc/a3d7T1ti+w8UrI3TmAAADpklEQVR4nO2b227kIAxAAxjCPf//twszne3ckoIJJg+ch6qVKs2RicExnmWZTCaTyWQymUwmk8lkMqECABaRyb+OlnknyQW/aZPRWtlwJcUUN6tlgj1Iv+sgLqIIQTnO3pHcqUsYrprJD7u7IlPLYEMQnu/Y3Q39UEMI7sDuZqhHLrL/fO4+BGUcJQjbH8H7MfSDBHWRXhJUQwRL9RjjfoBe2eI+lpjaDlSFXhK0tEsMsUovsZIKilo9aQSl31apR7vL1K9ugtMFEOrtEhuZnkeELxGI/IRD6UmiAKKevgzREwgG6Ud0Dou/i6odHIUeNjsyFKUg4LIjI1V/vUWg9Rgz/fXANvix/hnc8vgxTrBF19Sl71AUCRqvl46Q7n7Iw+0Hc3E/1t1vbdKT/f0a0mP6Xd+v5Xgj8WvKX9ffz7T4aYLzo+V8I6ig6xovb362u97V6xcIeD3mKN7gGup7TaAH+AKLpEcEEf1+SdThQCdI/905U9na/YUTNXkjNn4kdgv2FYSsiQ8BlSGOqv+XthjEE0jZgEa9hBBeMCBSmPYas7pHSdK6evKrXWGS1uSzYOUmSHp7dBO0NZsM2dbyJFheqPIw4oIabKngoAmEwiWWQ6J3Ewx/bzMkNfOu4KKOQyh5/ze2Y8P1YEJHMk17bf5NcLHmewwl18NGc56BJRom36KY/t7C6OmwBwDCbsZxLm9wzoyyV5G7A4tYg/Vq25S3YRVXmp+8Aa+M1nki66TgRZvCl/HWxhjEBTTTx4s1+s2xn/yQjynU9DNtLsquw6Z506cGq3ROioPdOWeKj/SKaU9R/6N2TPofpy1hwgCsdjsK29dIGk+zHQJE7Uri9qHoTPdh2RQ6JfHtq3TidQ0ihG1v1rnUUJrY6UlM+Wow6/qBiz1iCEHVpcQ+3NizY5gK0caVfcWs5+rZU+0S/MQvD4BomYnYQbrTiteGhvgRfDsjhFA4xY5Auva3ExDYaboiWjvmEM9OjFd4W1O1tktVT9ONa3mHBQ/HjxShB03rBLERpIheBjnXSxO9DCqC1R3mBlBXI01zGrVUtwj7nRrfqdXrdObuUdvFbJzyQwjGqvC1DLkgqdHDXaA2UXPQNYxoNFBcbPWvCr5REUDiveVB6R3dgKcvUxrAEcl7p3CBR+mVXbHT1S0ffkWl6rjlZWXfgRyy+d0pucZeqY/eX3jJIRyGLW/ZDkNcWb1QMn48Lj2KBgRB84EUxE8M5Nyu5WQymUz68Q/hES/A1a73sgAAAABJRU5ErkJggg==",
      },
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Time is flying away");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;

    console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <img className="avatar-img" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @martoniza</h4>
      </div>
    );
  }
}

export default UserClass;
