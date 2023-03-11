export const fetchTopPlayers = async (params) => {
  try {
    const response = await fetch("http://localhost:3333/top-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(
        {
          game: params.game,
          limit: params.limit
        }
      )
    })
    if (response.ok) {
      const jsonData = await response.json()
      return jsonData
    } else {
      console.error("Error fetching top players")
    }
  } catch (error) {
    console.error(error)
  }
}

export const sendUserVerificationRequest = async (params) => {
  try {
    const response = await fetch("http://localhost:3333/check-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(
        {
          nickname: params.nickname,
          score: params.score,
          game: params.game
        }
      )
    })
    if (response.ok) {
      const jsonData = await response.json()
      console.log(jsonData.message)
    } else {
      console.error("Error verifying user")
    }
  } catch (error) {
    console.error(error)
  }
}
