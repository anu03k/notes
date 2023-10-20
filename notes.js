document.addEventListener('DOMContentLoaded', () => {
    // your code here
    const container2 = document.querySelector('.container2');
    const container3 = document.querySelector('.container3');
    const checkIcon = document.querySelector('#check');
    const xIcon = document.querySelector('#cross');
    const CreateNote1 = document.querySelector('.CreateNote');
    CreateNote1.addEventListener('click', (e) => {

        if (container3.style.display === 'none') {
            container3.style.display = 'block';
        } else { container3.style.display = 'none' }

    })

    checkIcon.addEventListener('click', () => { //add new note when tick clicked
        createNote();

    });



    function createNote() {
        const noteText = document.getElementById('note-text').value;
        const node0 = document.createElement('div');
        const node1 = document.createElement('h3');
        node1.innerHTML = noteText;
        node1.setAttribute('style', "height:200px; width:200px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 0 10px 24px 0 rgba(0,0,0,0.7)  ");
        // const check = document.createElement('p');
        // check.innerHTML = '&#x2713;';
        // check.setAttribute('id', 'check');

        node0.appendChild(node1);

        node1.style.margin = margin();
        node1.style.transform = rotate();
        node1.style.background = color();

        container2.insertAdjacentElement("beforeend", node0);
        //element should be inserted immediately before the next sibling element of container2.
        node0.addEventListener('mouseenter', (e) => {
            node0.style.transform = "scale(1.1)";
        });
        node0.addEventListener('mouseleave', (e) => {
            node0.style.transform = "scale(1)";
        });

        document.getElementById('note-text').value = "";
    }
    xIcon.addEventListener('click', () => {
        container3.style.display = 'none';



    });



    function margin() {
        var random_margin = ['-5px', "1px", "5px", "10px ", "15px", "20px"];
        return random_margin[Math.floor(Math.random() * random_margin.length)];

    }
    /*function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    console.log(getRandomColor()); // output: e.g. #3E7C9D
    */


    function color() {
        var random_color = ["#8ED5EC", "#F6D1D9", "#B7F1A5", "#606c38", '#772e25'];
        var i = Math.floor(Math.random() * random_color.length);
        return random_color[i];
    }



    function rotate() {
        var random_rotate = ["rotate(5deg)", "rotate(10deg)", "rotate(-5deg)", "rotate(-10deg)", "rotate(15deg)"];
        return random_rotate[Math.floor(Math.random() * random_rotate.length)];


    }
});