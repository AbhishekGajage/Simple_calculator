let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                const result = eval(string);
                document.getElementById('display').textContent = result;
            } catch {
                document.getElementById('display').textContent = "Error";
            }
        } else if (value === 'AC') {
            string = "";
            document.getElementById('expression').textContent = "0";
            document.getElementById('display').textContent = "0";
        } else if (value === 'DE') {
            string = string.slice(0, -1);
            document.getElementById('expression').textContent = string;
        } else {
            string += value;
            document.getElementById('expression').textContent = string;
        }
    });
});
