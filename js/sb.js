<script type="text/javascript">
$(function () {
    $('.img').on('click', function () {
        var src = $(this).attr('src');
        $('.imgPreview img').attr('src', src);
        $('.imgPreview').show()
    })}
    $('.imgPreview').on('click', function () {
        $('.imgPreview').hide()
    });
)
</script>
