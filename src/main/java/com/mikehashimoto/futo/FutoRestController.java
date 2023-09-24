package com.mikehashimoto.futo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
public class FutoRestController {

	@RequestMapping(value = "/")
	public String index(Model model) {
		model.addAttribute("message", "Hello, World!");

		return "index";
	}

	@RequestMapping(value = "/clicked")
	public String clicked(Model model) {
		int index = count % 3;

		count++;

		model.addAttribute("message", messages.get(index));

		return "component/clicked";
	}

	private int count = 0;

	private List<String> messages = Arrays.asList(
		"One", "Two", "Three");

}
