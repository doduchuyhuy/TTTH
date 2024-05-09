function select(){
    const $main = $('.select');
    const $select = $('select');
    const $span = $('.title');
    const $icon = $('.icon');

    $main.on('mousedown', function(e) {
        e.preventDefault();

        // Kiểm tra xem đã có danh sách ul hiển thị chưa
        let $ul = $(this).find('ul');
        if ($ul.length) {
            // Nếu đã có, xóa nó đi
            $ul.remove();
        } else {
            // Nếu chưa có, tạo mới và thêm vào
            $ul = $('<ul></ul>');
            $select.children().each(function() {
                const $li = $('<li></li>').text($(this).text());

                $li.on('mousedown', function(e) {
                    e.stopPropagation();
                    $select.val($(this).text());
                    $select.css('border', '2px solid #1E49A8');
                    $span.css('color', '#1E49A8');
                    $ul.remove();
                });

                $ul.append($li);
            });

            $main.append($ul);
        }
    });

    // Thêm sự kiện để đóng ul khi nhấn ngoài
    $(document).on('mousedown', function(e) {
        if (!$main.is(e.target) && $main.has(e.target).length === 0) {
            $main.find('ul').remove();
        }
    });
}
// $(function() {
    
// });

// const main = document.querySelector('.select');
//     const select = document.querySelector('select');
//     const span = document.querySelector('.title');
//     const i = document.querySelector('.icon');
//     main.addEventListener('mousedown', e=>{e.preventDefault();
//         const select2=main.children[0];
//         const ul = document.createElement('ul');
//         [...select2.children].forEach(option=>{
//             const li = document.createElement('li');
//             li.textContent=option.textContent;
//             li.addEventListener('mousedown', e=>{
//                 e.stopPropagation();
//                 select.value=option.value;
//                 main.value=option.value;
//                 select.style.border='2px solid #1E49A8';
//                 span.style.color='#1E49A8';
//                 ul.remove();
//             });
//         ul.appendChild(li);    
//         })
//     main.appendChild(ul);
//     document.addEventListener('click',e=>{
//         if(!main.contains(e.target)){
//             select.style.color ='1px solid lightgray';
//             span.style.color ='#908D92';
//             i.style.color='#908D92';
//         }
//     })
//     })

 function loadselect(){
    $('.dropdown .matching-select div').click(function() {
        var value = $(this).data('value'); // Lấy giá trị từ data-value
        var textBoxId = $(this).closest('.dropdown').find('.textBox').attr('id');
        $('#' + textBoxId).val(value ? $(this).text().trim() : ''); // Nếu value là rỗng, reset textBox
    });

    $('.dropdown').click(function() {
        // Đóng tất cả các dropdown khác trước khi toggle dropdown hiện tại
        $('.dropdown').not(this).removeClass('active');
        $(this).toggleClass('active');
    });

    // Đóng dropdown khi click ngoài
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('active');
        }
    });
 }
