const counters = document.querySelectorAll('.counter');
    const speed = 500;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed1 = +counter.getAttribute('speed');

            const inc = target / speed1 ;

            console.log(count);

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 4);
            } else {
                count.innerText = target;
            }
        };

        updateCount();
    });