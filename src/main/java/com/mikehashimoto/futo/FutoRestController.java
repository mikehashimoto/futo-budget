package com.mikehashimoto.futo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FutoRestController {

	@RequestMapping(value = "/")
	public String index(Model model) {
		model.addAttribute("message", "Hello, World!");

		return "index";
	}

	@RequestMapping(value = "/clicked")
	public String clicked() {
		return "component/clicked";
	}

}
