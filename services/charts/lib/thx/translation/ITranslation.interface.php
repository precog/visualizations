<?php

interface thx_translation_ITranslation {
	//;
	function singular($id, $domain);
	function plural($ids, $idp, $quantifier, $domain);
}
