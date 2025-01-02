var images = [
    { src: 'img/image1.jpg', title: 'Image 1' },
    { src: 'img/image2.jpg', title: 'Image 2' },
    { src: 'img/image3.jpg', title: 'Image 3' },
    { src: 'img/image4.jpg', title: 'Image 4' },
    { src: 'img/image5.jpg', title: 'Image 5' }
];

$(function () {
    var gridSize = $('#levelPanel :radio:checked').val();
    imagePuzzle.startGame(images, gridSize);
    $('#newPhoto').click(function () {
        var gridSize = $('#levelPanel :radio:checked').val();
        imagePuzzle.startGame(images, gridSize);
    });

    $('#levelPanel :radio').change(function (e) {
        var gridSize = $(this).val();
        imagePuzzle.startGame(images, gridSize);
    });
});
function rules() {
    alert('Rearrange the pieces so that you get a sample image. \nThe steps taken are counted');
}