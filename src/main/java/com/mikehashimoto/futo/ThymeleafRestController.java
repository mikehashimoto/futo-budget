package com.mikehashimoto.futo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ThymeleafRestController {

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

}
