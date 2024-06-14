document.addEventListener("DOMContentLoaded", function() {

  const versionURLs = {
    "1.21.0": "https://mcpedl.org/uploads_files/13-06-2024/minecraft-1-21-0.apk",
    "1.20.81": "https://mcpedl.org/uploads_files/29-04-2024/minecraft-1-20-81.apk",
    "1.20.80": "https://mcpedl.org/uploads_files/23-04-2024/minecraft-1-20-80.apk",
    "1.20.73": "https://mcpedl.org/uploads_files/02-04-2024/minecraft-1-20-73.apk",
    "1.20.72": "https://mcpedl.org/uploads_files/19-03-2024/minecraft-1-20-72.apk",
    "1.20.71": "https://mcpedl.org/uploads_files/12-03-2024/minecraft-1-20-71.apk",
    "1.20.62": "https://mcpedlcom.org/wp-content/uploads/2024/02/minecraft-1-20-62.apk",
    "1.20.60": "https://mcpedl.org/uploads_files/06-02-2024/minecraft-1-20-60.apk",
    "1.20.51": "https://mcpedl.org/uploads_files/14-12-2023/minecraft-1-20-51.apk",
    "1.20.50": "https://mcpedl.org/uploads_files/05-12-2023/minecraft-1-20-50.apk",
    "1.20.41": "https://mcpedl.org/uploads_files/02-11-2023/minecraft-1-20-41.apk",
    "1.20.40": "https://mcpedl.org/uploads_files/24-10-2023/minecraft-1-20-40.apk",
    "1.20.32": "https://mcpedl.org/uploads_files/05-10-2023/minecraft-1-20-32.apk",
    "1.20.31": "https://mcpedl.org/uploads_files/26-09-2023/minecraft-1-20-31.apk",
    "1.20.30": "https://mcpedl.org/uploads_files/19-09-2023/minecraft-1-20-30.apk",
    "1.20.15": "https://mcpedl.org/uploads_files/16-08-2023/minecraft-1-20-15.apk",
    "1.20.12": "https://mcpedl.org/uploads_files/18-07-2023/minecraft-1-20-12.apk",
    "1.20.10": "https://mcpedl.org/uploads_files/11-07-2023/minecraft-1-20-10.apk",
    "1.20.1": "https://mcpedl.org/uploads_files/21-06-2023/minecraft-1-20-1.apk",
    "1.20.0": "https://mcpedl.org/uploads_files/07-06-2023/minecraft-1-20-0.apk",
    "1.19.80": "https://mcpedl.org/uploads_files/26-04-2023/minecraft-1-19-80.apk",
    "1.19.73": "https://mcpedl.org/uploads_files/29-03-2023/minecraft-1-19-73-02.apk",
    "1.19.71": "https://mcpedl.org/uploads_files/17-03-2023/minecraft-1-19-71.apk",
    "1.19.70": "https://mcpedl.org/uploads_files/14-03-2023/minecraft-1-19-70.apk",
    "1.19.63": "https://mcpedl.org/uploads_files/24-02-2023/minecraft-1-19-63.apk",
    "1.19.62": "https://mcpedl.org/uploads_files/18-02-2023/minecraft-1-19-62.apk",
    "1.19.60": "https://mcpedl.org/uploads_files/07-02-2023/minecraft-1-19-60.apk",
    "1.19.51": "https://mcpedl.org/uploads_files/13-12-2022/minecraft-1-19-51.apk",
    "1.19.50": "https://mcpedl.org/uploads_files/29-11-2022/minecraft-1-19-50.apk",
    "1.19.41": "https://mcpedl.org/uploads_files/03-11-2022/minecraft-1-19-41.apk",
    "1.19.40": "https://mcpedl.org/uploads_files/25-10-2022/minecraft-1-19-40.apk",
    "1.19.31": "https://mcpedl.org/uploads_files/04-10-2022/minecraft-1-19-31.apk",
    "1.19.30": "https://mcpedl.org/uploads_files/20-09-2022/minecraft-1-19-30.apk",
    "1.19.22": "https://mcpedl.org/uploads_files/01-09-2022/minecraft-1-19-22.apk",
    "1.19.21": "https://mcpedl.org/uploads_files/04-11-2022/minecraft-1-19-21.apk",
    "1.19.20": "https://mcpedl.org/uploads_files/22-11-2022/minecraft-1-19-20.apk",
    "1.19.11": "https://mcpedl.org/uploads_files/26-07-2022/minecraft-1-19-11.apk",
    "1.19.10": "https://mcpedl.org/uploads_files/16-07-2022/minecraft-1-19-10.apk",
    "1.19.2": "https://mcpedl.org/uploads_files/01-12-2022/minecraft-1-19-2.apk",
    "1.19.0": "https://mcpedl.org/uploads_files/01-12-2022/minecraft-1-19-0.apk",
    "1.19.81": "https://tinyurl.com/mcpe11981",
  };


  const containers = {
    "1-21": document.getElementById("version-1-21"),
    "1-20": document.getElementById("version-1-20"),
    "1-19": document.getElementById("version-1-19")
  };


  Object.entries(versionURLs)
    .forEach(([version, url]) => {

      const button = document.createElement("button");
      button.className = "version-button";
      button.textContent = version;
      button.addEventListener("click", function() {
        if (url) {

          window.location.href = url;
        } else {
          alert("URL for version " + version + " is not defined.");
        }
      });

      // Determine which container to append the button based on version
      if (version.startsWith("1.21")) {
        containers["1-21"].appendChild(button);
      } else if (version.startsWith("1.20")) {
        containers["1-20"].appendChild(button);
      } else if (version.startsWith("1.19")) {
        containers["1-19"].appendChild(button);
      } else {
        alert("Version " + version + " does not match any container.");
      }
    });
});