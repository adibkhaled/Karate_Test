Feature: Testing rest api by using CSV file 

  Background:
    * def baseUrl = baseUrl
    * def customServiceUrl = 'https://env_1.assaicloud.com/AAenv_1/'
    * def user = userName
    * def customServiceUser = userNameCustomService
    * def pass = password
    * def env = env

  Scenario Outline: Testing the json get call for <apiCall> with multiple parameter

    Given url baseUrl
    And header Authorization = call read('basic-auth.js') { username : '#(user)' , password : '#(pass)' }
    And path '/api/customservices/<apiCall>'
    And params <paramReq>
    When method GET
    Then status <statusCode>
    * def oldResponse = response
    Given url baseUrl
    And header Authorization = call read('basic-auth.js') { username : '#(customServiceUser)' , password : '#(pass)' }
    And path '/api/customservices/<apiCall>'
    And params <paramReq>
    When method GET
    Then status <statusCode>
    * def newResponse = response
    And match oldResponse == newResponse
    Examples:
      | read('CSV/RestAPI.csv') |