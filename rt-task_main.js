	/* METADATA */
	
	var timeline = [];
	var no_trials = 1;
	//13 in the actual experiment
	var repo_site = "https://simonhanzal.github.io/RT/";

    /* WELCOME */
    
	var welcome = {
      type: "html-keyboard-response",
      stimulus: "Welcome to the prototype experiment. Press any key to begin."
    };
    timeline.push(welcome);

    /* INSTRUCTIONS */
    
	var instructions = {
      type: "html-keyboard-response",
      stimulus: "<p>In this experiment, a number will appear in the center " +
          "of the screen.</p><p>If the number is <strong>3</strong>, " +
          "do not press anything.</p>" +
          "<p>If it is any other number between <strong>1-2</strong> or <strong>4-9</strong>, press the <strong>Space Bar</strong> " +
          "as fast as you can.</p>" +
	  "<p></p>" +
	  "<p>Make sure the experiment is open in an active window, displayed in the center, you are using a computer,</p>"+
	  "<p>your keyboard is connected to the computer and that there are no distractions around you.</p>" +
	  "<p></p>" +	
          "<p>Press any key to begin.</p>",
      post_trial_gap: 2000
    };
    timeline.push(instructions);

    /* TRIALS */
	
	var test_stimuli = [
	  { stimulus: '<div style="font-size:80px;">1</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">2</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '80' } },
//	  { stimulus: '<div style="font-size:80px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">4</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">5</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">6</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">7</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">8</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:80px;">9</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '80' } },
	  { stimulus: '<div style="font-size:32px;">1</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">2</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '32' } },
//	  { stimulus: '<div style="font-size:32px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">4</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">5</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">6</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">7</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">8</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:32px;">9</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '32' } },
	  { stimulus: '<div style="font-size:48px;">1</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48' } },
	  { stimulus: '<div style="font-size:48px;">2</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48'  } },
	  { stimulus: '<div style="font-size:48px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '48'  } },
//	  { stimulus: '<div style="font-size:48px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '48'  } },
	  { stimulus: '<div style="font-size:48px;">4</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48'  } },
	  { stimulus: '<div style="font-size:48px;">5</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48'  } },
	  { stimulus: '<div style="font-size:48px;">6</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48'  } },
	  { stimulus: '<div style="font-size:48px;">7</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48'  } },
	  { stimulus: '<div style="font-size:48px;">8</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48'  } },
	  { stimulus: '<div style="font-size:48px;">9</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '48'  } }, 
	  { stimulus: '<div style="font-size:64px;">1</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'  } },
	  { stimulus: '<div style="font-size:64px;">2</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'   } },
	  { stimulus: '<div style="font-size:64px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '64'   } },
//	  { stimulus: '<div style="font-size:64px;">3</div>', data: { test_part: 'test', correct_response: 'None', font_size: '64'   } },
	  { stimulus: '<div style="font-size:64px;">4</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'   } },
	  { stimulus: '<div style="font-size:64px;">5</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'   } },
	  { stimulus: '<div style="font-size:64px;">6</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'   } },
	  { stimulus: '<div style="font-size:64px;">7</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'   } },
	  { stimulus: '<div style="font-size:64px;">8</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'   } },
	  { stimulus: '<div style="font-size:64px;">9</div>', data: { test_part: 'test', correct_response: 'Space', font_size: '64'   } }
    ];

    var fixation = {
      type: 'html-keyboard-response',
      stimulus: "<p></p>",//'<div style="font-size:60px;">+</div>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 15,
      data: {test_part: 'fixation'}
    }

    var test = {
      type: "html-keyboard-response",
      stimulus: jsPsych.timelineVariable('stimulus'),
      choices: ['f1','Space'],
	  stimulus_duration: 250,
	  trial_duration: 1135,
	  response_ends_trial: false,
      data: jsPsych.timelineVariable('data'),
	  on_finish: function(data){
		data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.correct_response);
		data.three = data.stimulus == '<div style="font-size:32px;">3</div>' || data.stimulus == '<div style="font-size:48px;">3</div>' || data.stimulus == '<div style="font-size:64px;">3</div>' || data.stimulus == '<div style="font-size:80px;">3</div>';
		data.fonts = data.font_size;
		if(data.correct == true){
		  data.type = 1;
		} else {
		  data.type = 0;
	       };
		if(data.stimulus == '<div style="font-size:32px;">3</div>' || data.stimulus == '<div style="font-size:48px;">3</div>' || data.stimulus == '<div style="font-size:64px;">3</div>' || data.stimulus == '<div style="font-size:80px;">3</div>'){
		  data.go = 3;
		} else {
		  data.go = 2;
	       }
	},
    }

    var test_procedure = {
      timeline: [fixation, test],
      timeline_variables: test_stimuli,
      repetitions: no_trials,
	  randomize_order: true
    }
	timeline.push(test_procedure);
	
	var debrief_block = {
	    type: "html-keyboard-response",
	    stimulus: function() {
			
		/* BASIC NUMBER CALCULATIONS */
		
		var trials = jsPsych.data.get().filter({test_part: 'test'});
		var correct_trials = trials.filter({correct: true});
		var correct_relevant = correct_trials.filter({three: true});
		var go_trials = trials.filter({three: false});
		var correct_go_trials = correct_trials.filter({three: false});

		var correct_no_go = correct_relevant.count();
		var incorrect_no_go = no_trials - correct_relevant.count();
		var correct_go = correct_trials.count() - correct_no_go;
		var incorrect_go = no_trials * 8 - correct_go;
		
		/* ANALYTIC CALCULATIONS */
		
		var accuracy = Math.round(correct_trials.count() / trials.count() * 10000) / 100;
		
		var minimum = Math.round(correct_go_trials.select('rt').min());
		var maximum = Math.round(correct_go_trials.select('rt').max());
		
		function roundme(value) {
		return Math.round(value);
		}
		
		var trial_data1 = Object.entries(correct_go_trials.select('rt'));
		var trial_data2 = trial_data1.slice(0,1).toString();
		var trial_data3 = trial_data2.split(",");
		var trial_data4 = trial_data3.slice(1);
		var trial_data5 = trial_data4.map(roundme);
		var trial_data_word = trial_data5.join(";");
		
		var trial_value1 = Object.entries(trials.select('type'));
		var trial_value2 = trial_value1.slice(0,1).toString();
		var trial_value3 = trial_value2.split(",");
		var trial_value4 = trial_value3.slice(1);
		var trial_value5 = trial_value4.join(";");
		
		var trial_go1 = Object.entries(trials.select('go'));
		var trial_go2 = trial_go1.slice(0,1).toString();
		var trial_go3 = trial_go2.split(",");
		var trial_go4 = trial_go3.slice(1);
		var trial_go5 = trial_go4.join(";");
		
		var trial_font1 = Object.entries(trials.select('fonts'));
		var trial_font2 = trial_font1.slice(0,1).toString();
		var trial_font3 = trial_font2.split(",");
		var trial_font4 = trial_font3.slice(1);
		var trial_font5 = trial_font4.join(";");
		
		var rt = Math.round(correct_trials.select('rt').mean());
		var true_rt = Math.round(correct_go_trials.select('rt').mean()*100)/100;
		var no_go_rt = Math.round(correct_relevant.select('rt').mean());
		var sd1 = trial_data4.map(fc);

		function fc(value) {
		const mean = true_rt
		return Math.pow((value - true_rt), 2);
		}
		
		var sd2 = sd1.reduce((a,b) => a + b, 0);
		var sd3 = sd2/sd1.length;
		var sd4 = Math.sqrt(sd3);
		var deviation = Math.round(sd4*100)/100;
			
			return "<p>Press any key to complete the experimental part. Thank you!</p>";
		
		}
	};
	timeline.push(debrief_block);
