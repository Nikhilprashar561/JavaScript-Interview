

const data = {
  token: "a8f7c2d9x1m4p7q0z6w3v9k2",
  user: {
    id: "usr_1029",
    profile: {
      fullName: "Nikhil Sharma",
      email: "nikhil@example.com",
      social: {
        github: "nikhilcodes",
        linkedin: "nikhil-dev"
      }
    },
    settings: {
      theme: "dark",
      notifications: true
    }
  }
};

const token = "6787890-hfsew7tyghbn7856ugcrfghjh98655nbvcftyhzqwertyuiop854"

function userData (pollData, token ){
    console.log("Poll Data Aya Kya?", pollData);
    console.log("Token aya kya?", token)

    return {pollData, token}
}

const dataa = userData(data, token)

data.user

data.token


