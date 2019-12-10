            var activeImage = 0;
            
            function renderSlider() {
                //generowanie slidera (divów itp.)

                var sliderImagesTab = ["test1.jpg", "test2.jpg", "test3.jpg"]

                var div = document.createElement('div');
                div.classList.add("sliderContainer")
                document.getElementsByClassName('main')[0].prepend(div);
                //BUTTONS
                var btn = document.createElement('i');
                btn.classList.add('fas', 'fa-arrow-left')
                btn.id = "prevBtn";
                document.getElementsByClassName('sliderContainer')[0].append(btn)

                var btn = document.createElement('i');
                btn.classList.add('fas', 'fa-arrow-right')
                btn.id = "nextBtn";
                document.getElementsByClassName('sliderContainer')[0].append(btn)


                //<DIV SLIDER + OBRAZKI>
                var div = document.createElement('div');
                div.classList.add("slider")
                document.getElementsByClassName('sliderContainer')[0].append(div);

                for (var i = 0; i <= sliderImagesTab.length + 1; i++) {
                    var img = document.createElement('img');
                    if (i == 0) {
                        img.src = sliderImagesTab[sliderImagesTab.length - 1];
                        img.alt = sliderImagesTab[sliderImagesTab.length - 1] + " clone";
                        img.id = "lastClone"
                    }
                    else if (i == sliderImagesTab.length + 1) {
                        img.src = sliderImagesTab[0];
                        img.alt = sliderImagesTab[0] + " clone";
                        img.id = "firstClone"
                    }
                    else {
                        img.src = sliderImagesTab[i - 1]
                        img.alt = sliderImagesTab[i - 1]
                    }
                    document.getElementsByClassName('slider')[0].append(img);
                }
                //Logika dla slidera
                const sliderSlide = document.querySelector('.slider');
                const sliderImages = document.querySelectorAll('.slider img');
                //Buttons
                const prevBtn = document.querySelector('#prevBtn');
                const nextBtn = document.querySelector('#nextBtn');
                //Counter
                let counter = 1;
                _image=sliderImagesTab[activeImage]
                const size = document.getElementsByClassName('slider')[0].clientWidth;

                sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

                nextBtn.addEventListener('click', function () {
                    if (counter >= sliderImages.length - 1) return;
                    sliderSlide.style.transition = 'transform 0.2s ease-in-out';

                    activeImage++;
                    _image=sliderImagesTab[activeImage]

                    counter++;
                    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

                });

                prevBtn.addEventListener('click', function () {
                    if (counter <= 0) return;
                    sliderSlide.style.transition = 'transform 0.2s ease-in-out';
                    
                    activeImage--;
                    _image=sliderImagesTab[activeImage]

                    
                    counter--;
                    sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
                });

                //prev
                sliderSlide.addEventListener('transitionend', function () { //gdy 
                    if (sliderImages[counter].id === 'lastClone') {
                        sliderSlide.style.transition = 'none';
                        counter = sliderImages.length - 2;
                        activeImage=counter-1;
                        _image=sliderImagesTab[activeImage]

                        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
                    }
                //next
                    if (sliderImages[counter].id === 'firstClone') {
                        sliderSlide.style.transition = 'none';
                        counter = sliderImages.length - counter;
                        activeImage=counter-1;
                        _image=sliderImagesTab[activeImage]
                        sliderSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

                    }
                });
            }