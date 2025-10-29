// /*
//  * This is runner to run the Karate tool by using JUnit.
//  * This runner can support parallel running 
//  */

// package module;

// import static org.junit.Assert.assertTrue;

// import java.io.File;
// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.Collection;
// import java.util.List;

// import org.apache.commons.io.FileUtils;
// import org.junit.Test;

// import com.intuit.karate.Results;
// import com.intuit.karate.Runner;

// import net.masterthought.cucumber.Configuration;
// import net.masterthought.cucumber.ReportBuilder;

// public class RunSingleAPI{
	
// 	static String selectedEnvironments = System.getProperty("environment");
// 	//static String selectedEnvironments = "env_1"
//     Results results;

// 	@Test
//     public void testParallel() throws Throwable {
		
// 		System.setProperty("karate.env" , selectedEnvironments);
		
//         results = Runner.path("src/test/resources/RestAPI/RestAPI.feature").tags("~@ignore").parallel(1);
//         generateReport(results.getReportDir());
//         assertTrue(results.getErrorMessages(), results.getFailCount() == 0);
// 		}
	
// 	public static void generateReport(String karateOutputPath) {
//         Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[] {"json"}, true);
//         List<String> jsonPaths = new ArrayList(jsonFiles.size());
//         jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
        
//         Configuration config = new Configuration(new File("target"), "karate.env");
//         ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
//         reportBuilder.generateReports();        
//     }
// }