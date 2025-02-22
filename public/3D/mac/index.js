let icons = document.querySelectorAll('.ico');

icons.forEach((item, index) => {
  item.addEventListener('mouseover', (e) => {
    focus(e.target, index);
  });
  item.addEventListener('mouseleave', () => {
    icons.forEach((item) => {
      item.style.transform = 'scale(1)  translateY(0px)';
    });
  });
});

const focus = (elem, index) => {
  let previous = index - 1;
  let previous1 = index - 2;
  let next = index + 1;
  let next2 = index + 2;

  if (previous == -1) {
    console.log('first element');
    elem.style.transform = 'scale(1.5)  translateY(-10px)';
  } else if (next == icons.length) {
    elem.style.transform = 'scale(1.5)  translateY(-10px)';
    console.log('last element');
  } else {
    elem.style.transform = 'scale(1.5)  translateY(-10px)';
    icons[previous].style.transform = 'scale(1.2) translateY(-6px)';
    icons[previous1].style.transform = 'scale(1.1)';
    icons[next].style.transform = 'scale(1.2) translateY(-6px)';
    icons[next2].style.transform = 'scale(1.1)';
  }
};
document.addEventListener('DOMContentLoaded', function () {
  var folderIcon = document.getElementById('folderIcon');
  var folderWindow = document.getElementById('folderWindow');
  var closeBtn = document.getElementById('closeBtn');
  var minimizeBtn = document.getElementById('minimizeBtn');
  var zoomBtn = document.getElementById('zoomBtn');

  // Function to toggle window visibility
  function toggleWindow() {
    if (folderWindow.style.display === 'none') {
      // Restore the window
      folderWindow.style.display = 'flex'; // Use flex to maintain the layout
    } else {
      // Minimize the window
      folderWindow.style.display = 'none';
    }
  }

  // Event listeners
  folderIcon.addEventListener('click', toggleWindow);
  closeBtn.addEventListener('click', toggleWindow);
  minimizeBtn.addEventListener('click', function () {
    folderWindow.style.display = 'none';
  });
  zoomBtn.addEventListener('click', function () {
    folderWindow.style.width = parseInt(folderWindow.style.width) * 1.1 + 'px';
    folderWindow.style.height =
      parseInt(folderWindow.style.height) * 1.1 + 'px';
  });
  const sectionContent = {
    aboutSection:
      "<a href='' target='_blank' rel='noopener noreferrer'><button class='resume-button'>Resume</button></a><br><p id='about-me'>Heyy there! I am Tien 👋</p>",
    skillsSection:
      '<br><p>(Hover on icons for proficiency level)</p><br>' +
      '<br><br>' +
      "<p id='skills-container'>" +
      "<i class='devicon-python-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>" +
      "<i class='devicon-c-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>" +
      "<i class='devicon-java-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>" +
      "<i class='devicon-cplusplus-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>" +
      "<i class='devicon-html5-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-css3-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-javascript-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-threejs-original' style='font-size:48px;' title = 'Proficiency: 3.5/5'></i>" +
      "<i class='devicon-react-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-blender-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-tensorflow-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-matlab-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>" +
      "<i class='devicon-flutter-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-dart-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-swift-plain' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      "<i class='devicon-codepen-plain' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>" +
      "<i class='devicon-opencv-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>" +
      "<i class='devicon-mysql-plain-wordmark' style='font-size:48px;' title = 'Proficiency: 4.5/5'></i>" +
      "<i class='devicon-vscode-plain' style='font-size:48px;' title = 'Proficiency: 4/5'></i>" +
      "<i class='devicon-flask-plain' style='font-size:48px;' title = 'Proficiency: 3.5/5'></i>" +
      "<i class='devicon-webflow-original' style='font-size:48px;' title = 'Proficiency: 3/5'></i>" +
      '</p> ',
    projectsSection: `<h3 style="padding-top: 5vh">FullStack Develop</h3>
    `,
    workSection:
      "<div class='work-experience'>" +
      // "<span class = 'work-name'>AI-ML Developer</span><br>" +
      // '<strong>Sify Technologies</strong><br>' +
      // "<span class='designation-time'>August 2023-October 2023</span><br>" +
      // '• Researched and implemented large language models: both OpenAI and HuggingFace models, to create a personal document chatbot.<br>' +
      // '• Tool is equipped with conversational abilities and chat history so it can remember feedback and provide better results with each iteration of questioning.<br>' +
      // '• Used simple front end tools like streamlit and flask to create an interactive UI for the tool. Backend was built completely on Python.<br>' +
      // '• Built with ML frameworks, the chatbot can also produce a query analysis report for review purposes.<br>' +
      // '• The chatbot was built using NLP frameworks and AI API technologies: there are currently two versions: OpenAI and Huggingface’s dollybv2 model powering the bot.<br>' +
      // '</div>' +
      // "<div class='work-experience'>" +
      // "<span class = 'work-name'>Research Intern</span><br>" +
      // '<strong>VIT-Chennai School of Cyber Physical Systems</strong><br>' +
      // "<span class='designation-time'>August 2023-October 2023</span><br>" +
      // '• Applied for a Patent in a wearable IoT medical device for Dysarthria patients.<br>' +
      // '• The device is made to convert slurred speech into clear intelligible language in real-time.<br>' +
      // '• It is also equipped with stroke prediction capabilities and dashboard analytics to monitor the patient’s level of dysarthria.' +
      // '</div>' +
      // "<div class='work-experience'>" +
      // "<span class = 'work-name'>Technical Support</span><br>" +
      // '<strong>Storycentre.org</strong><br>' +
      // "<span class='designation-time'>September 2022-March 2023</span><br>" +
      // '• Worked in Technical support team for Storycentre.org, a non-profit organization based in North America.<br>' +
      // "• Assisted in their 'Rainbow stories' project as technical support in editing the stories and publishing them on their website.<br>" +
      // '• Worked exclusively with frontend website and video and text editors to make verbal stories manufactured in the workshops come to life.<br>' +
      // '</div>' +
      // "<div class='work-experience'>" +
      // "<span class = 'work-name'>Teacher</span><br>" +
      // '<strong>Mahadevi Birla World Academy</strong><br>' +
      // "<span class='designation-time'>June 2021-August 2021</span><br>" +
      // '• Worked as a teaching intern for a period of three weeks teaching English and computer science to middle school students.<br>' +
      // '• Taught basic computer science frameworks and taught the programming language LOGO.<br>' +
      // '• Taught the original text of Alice In Wonderland by Lewis Carol and organized essay competitions on said topics.<br>' +
      '</div>',
    contactSection: '',
    // "<div id='contact'>" +
    // "<form action=''><table><tr><td><input type='text'class='box' placeholder='First Name'></td><td><input type='text'class='box' placeholder='Last Name'></td></tr><tr><td><input type='email' class='box' placeholder='Your E-mail'></td><td><input type='text'class='box' placeholder='Subject'></td></tr><tr><td colspan='2'><textarea name='' id='' cols='41' rows='10' class='box message' placeholder='Type your message'></textarea></td></tr><tr><td colspan = '2'><input type='submit' value='Send Message' class='btn'></td></tr></table></form>" +
    // '</div>',
  };

  const sectionHeading = {
    aboutSection: 'About Me',
    skillsSection: 'My Skills',
    projectsSection: 'My Projects',
    workSection: 'Work Experience',
    contactSection:
      'Contact Me' +
      "<br><br><br><div id='contact-icon'>" +
      "<a href='https://github.com/TienLD-0801' target='_blank' rel='noopener noreferrer'><i class='devicon-github-original' ></i></a>" +
      "<a href = 'https://www.linkedin.com/in/tienld' target='_blank' rel='noopener noreferrer'><i class='devicon-linkedin-plain' ></i></a>" +
      '</div>',
  };
  // Sidebar click events
  var sections = document.querySelectorAll('.section');
  sections.forEach(function (section) {
    section.addEventListener('click', function () {
      var sectionId = section.id;
      var contentDiv = document.getElementById('content');
      contentDiv.innerHTML =
        "<span id='header'><h3>" +
        sectionHeading[sectionId] +
        '</h3></span>' +
        sectionContent[sectionId];
    });
  });

  // Make the window draggable
  var titlebar = document.querySelector('.titlebar');
  var isDragging = false;
  var offset = { x: 0, y: 0 };

  titlebar.addEventListener('mousedown', function (e) {
    isDragging = true;
    offset = {
      x: folderWindow.offsetLeft - e.clientX,
      y: folderWindow.offsetTop - e.clientY,
    };
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    folderWindow.style.left = e.clientX + offset.x + 'px';
    folderWindow.style.top = e.clientY + offset.y + 'px';
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
});

//function to display the realtime date and time.

function menutime() {
  var time = new Date(),
    daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    day = daysOfWeek[time.getDay()],
    date = time.getDate(),
    month = months[time.getMonth()],
    hours = time.getHours(),
    minutes = time.getMinutes(),
    ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hours is 0, make it 12

  document.querySelectorAll(
    '.menutime'
  )[0].innerHTML = `${day} ${date} ${month} ${harold(hours)}:${harold(
    minutes
  )}  ${ampm}`;

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn;
    }
    return standIn;
  }
}

setInterval(menutime, 1000);
