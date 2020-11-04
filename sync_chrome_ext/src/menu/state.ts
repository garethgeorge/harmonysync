export const getSyncStatus = async () => {
  return new Promise((accept, reject) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      console.log("queried for active tab: ", tabs);
      if (tabs.length === 0) 
        reject(new Error("no eligable active tab"));
      chrome.tabs.sendMessage(tabs[0].id, {message: "getSyncStatus"}, function(response) {
        accept(response);
      });
    });
  });
}