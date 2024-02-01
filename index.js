function addURLS() {
   let URLS = [
     "https://mcpedl.org/uploads_files/14-12-2023/minecraft-1-20-51.apk",
     "https://mcpedl.org/uploads_files/05-12-2023/minecraft-1-20-50.apk",
     "https://mcpedl.org/uploads_files/02-11-2023/minecraft-1-20-41.apk",
      'https://mcpedl.org/uploads_files/24-10-2023/minecraft-1-20-40.apk',
      'https://mcpedl.org/uploads_files/05-10-2023/minecraft-1-20-32.apk',
      'https://mcpedl.org/uploads_files/26-09-2023/minecraft-1-20-31.apk',
      'https://mcpedl.org/uploads_files/19-09-2023/minecraft-1-20-30.apk',
      'https://mcpedl.org/uploads_files/16-08-2023/minecraft-1-20-15.apk',
      'https://mcpedl.org/uploads_files/18-07-2023/minecraft-1-20-12.apk',
      'https://mcpedl.org/uploads_files/11-07-2023/minecraft-1-20-10.apk',
      'https://mcpedl.org/uploads_files/21-06-2023/minecraft-1-20-1.apk',
      'https://mcpedl.org/uploads_files/07-06-2023/minecraft-1-20-0.apk',
      'https://tinyurl.com/mcpe11981',
      'https://mcpedl.org/uploads_files/26-04-2023/minecraft-1-19-80.apk',
      'https://mcpedl.org/uploads_files/29-03-2023/minecraft-1-19-73-02.apk',
      'https://mcpedl.org/uploads_files/17-03-2023/minecraft-1-19-71.apk',
      'https://mcpedl.org/uploads_files/14-03-2023/minecraft-1-19-70.apk',
      'https://mcpedl.org/uploads_files/24-02-2023/minecraft-1-19-63.apk',
      'https://mcpedl.org/uploads_files/18-02-2023/minecraft-1-19-62.apk',
      'https://mcpedl.org/uploads_files/07-02-2023/minecraft-1-19-60.apk',
      'https://mcpedl.org/uploads_files/13-12-2022/minecraft-1-19-51.apk',
      'https://mcpedl.org/uploads_files/29-11-2022/minecraft-1-19-50.apk',
      'https://mcpedl.org/uploads_files/03-11-2022/minecraft-1-19-41.apk',
      'https://mcpedl.org/uploads_files/25-10-2022/minecraft-1-19-40.apk',
      'https://mcpedl.org/uploads_files/04-10-2022/minecraft-1-19-31.apk',
      'https://mcpedl.org/uploads_files/20-09-2022/minecraft-1-19-30.apk',
      'https://mcpedl.org/uploads_files/01-09-2022/minecraft-1-19-22.apk',
      'https://mcpedl.org/uploads_files/04-11-2022/minecraft-1-19-21.apk',
      'https://mcpedl.org/uploads_files/22-11-2022/minecraft-1-19-20.apk',
      'https://mcpedl.org/uploads_files/26-07-2022/minecraft-1-19-11.apk',
      'https://mcpedl.org/uploads_files/16-07-2022/minecraft-1-19-10.apk',
      'https://mcpedl.org/uploads_files/01-12-2022/minecraft-1-19-2.apk',
      'https://mcpedl.org/uploads_files/01-12-2022/minecraft-1-19-0.apk',
      'https://mcpedl.org/uploads_files/05-10-2023/minecraft-1-20-41.apk',
      'https://mcpedl.org/uploads_files/24-10-2023/minecraft-1-20-40.apk',
      'https://mcpedl.org/uploads_files/21-06-2023/minecraft-1-20-1.apk',
      'https://mcpedl.org/uploads_files/29-03-2023/minecraft-1-19-73-02.apk',
      'https://www.mediafire.com/file/qr96yns3o7u1arw/Minecraft_1.19.63.01.apk/file',
      'https://www.mediafire.com/file/ac6cqdbnv1j71lf/Minecraft+1.19.50+Official+Compressed.apk/file',
      'https://www.mediafire.com/file/5azvb090agizyld/Minecraft_1.19.31_Arm64.apk/file',
      'https://www.mediafire.com/file/tzgdon033175lzn/Minecraft_PE_1.19.2-64bit.apk/file',
      'https://www.mediafire.com/file/xty209dq6btrozl/Minecraft.ver.1.19.0.05.build.951900005.apk/file?dkey=25prbi9pn4p116'];
   loadURLS(URLS);
}
function loadURLS(URL) {
   let x = document.getElementsByTagName('button');
   for (let i = 0; i < x.length; i++) {
      x[i].setAttribute('onClick', `window.open("${URL[i]}");`);
   }
}

//termux works