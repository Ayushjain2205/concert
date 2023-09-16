const code = {
  js: `
fetch('https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID', {
  headers: {
    'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error'HTTP error');
  }
  return response.json();
})
.then(data => {
  console.log(data.summary);
})
.catch(error => {
  console.error("Error fetching data:", error);
});

  `,
  python: `import requests

response = requests.get(
    'https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID',
    headers={'Authorization': 'Bearer a1B2c3D4e5F6g7H8i9J0'}
)

if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.status_code)
`,
  bash: `curl -H "Authorization: Bearer a1B2c3D4e5F6g7H8i9J0" "https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID"
`,
  go: `package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	resp, err := http.Get("https://data-royale.netlify.app/api/file-summary?fileId=YOUR_FILE_ID")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusOK {
		bodyBytes, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			fmt.Println("Error reading body:", err)
			return
		}
		fmt.Println(string(bodyBytes))
	} else {
		fmt.Println("Error status:", resp.StatusCode)
	}
}
`,
};

export default code;
