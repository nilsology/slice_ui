<?php
/**
 * @package redaxo5
 */

$subpage = rex_be_controller::getCurrentPagePart(2);

echo rex_view::title(rex_i18n::msg('slice_ui_title'));

include rex_be_controller::getCurrentPageObject()->getSubPath();