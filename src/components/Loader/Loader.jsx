import React from 'react';
import s from './Loader.module.css'

export default function Loader () {
    return (
        <div className={s.loader}>
           <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 32">
                <title>cabagge</title>
                <path fill="#FF751D" d="M14.866 0c1.429-0 2.831 0.309 4.196 0.927 1.574 0.713 3.086 1.589 4.494 2.602 0.062 0.044 0.12 0.091 0.174 0.141l1.514-1.219c0.105-0.085 0.252-0.094 0.367-0.024 0.052 0.032 1.298 0.802 2.352 2.033 1.058 1.235 1.522 2.448 1.541 2.499 0.042 0.111 0.019 0.236-0.060 0.325l-0.931 1.053c-0.023 0.026-0.049 0.047-0.077 0.063 0.476 0.926 1.114 2.65 1.345 5.488 0.204 2.513-0.114 4.574-0.945 6.125-0.044 0.083-0.11 0.219-0.181 0.366-0.122 0.251-0.248 0.511-0.334 0.653-0.085 0.14-0.179 0.301-0.282 0.48-0.801 1.387-2.292 3.967-5.698 5.934-2.887 1.667-4.323 1.84-5.591 1.993-0.754 0.091-1.405 0.17-2.281 0.562-2.229 0.998-2.675 1.814-2.679 1.823-0.043 0.081-0.119 0.143-0.208 0.165s-0.184 0.008-0.26-0.044c-0.234-0.162-1.399-1.009-1.412-1.828-0.006-0.397 0.131-0.669 0.232-0.867 0.103-0.203 0.099-0.208 0.056-0.266-0.047-0.062-0.132-0.096-0.267-0.147-0.322-0.121-0.808-0.304-0.831-1.244-0.018-0.749 0.377-1.167 0.698-1.47-0.635-0.317-2.264-1.183-3.557-2.316-0.835-0.732-1.489-1.588-1.892-2.177-0.307-0.449-0.492-0.746-0.597-0.949-0.412 0.223-0.692 0.319-0.909 0.394-0.255 0.087-0.396 0.136-0.617 0.341-0.735 0.682-1.935 0.146-2.080 0.045-0.082-0.057-0.135-0.146-0.146-0.245-0.020-0.183 0.084-0.297 0.275-0.503 0.316-0.342 0.974-1.055 1.29-2.264 0.283-1.084 0.224-2.343 0.172-3.453-0.033-0.701-0.064-1.364-0.001-1.887 0.206-1.712 0.636-5.274 3.261-8.201 1.255-1.4 2.831-2.623 4.461-3.481 0.028-0.022 0.060-0.038 0.093-0.049 0.402-0.208 0.807-0.393 1.211-0.553 1.385-0.549 2.755-0.824 4.102-0.824zM16.622 0.82c-2.388-0.448-4.714 0.089-6.74 1.114-0.14 0.286-0.547 1.244-0.517 2.693 0.036 1.707 0.331 2.246 0.334 2.251 0.086 0.151 0.037 0.347-0.112 0.436s-0.341 0.046-0.433-0.101c-0.040-0.063-0.389-0.672-0.428-2.572-0.020-0.943 0.128-1.696 0.288-2.227-1.376 0.823-2.583 1.856-3.538 2.921-0.496 0.553-0.909 1.131-1.255 1.716 0.117 0.286 0.38 1.113 0.237 2.502-0.167 1.617-0.228 2.5-0.228 2.508-0.012 0.176-0.167 0.308-0.341 0.297-0.176-0.012-0.309-0.165-0.297-0.341 0.001-0.009 0.063-0.9 0.23-2.53 0.073-0.712 0.029-1.253-0.038-1.626-1.022 2.092-1.271 4.156-1.411 5.324-0.057 0.47-0.027 1.107 0.005 1.78 0.054 1.157 0.116 2.468-0.192 3.645-0.329 1.259-0.977 2.031-1.352 2.442 0.298 0.078 0.718 0.119 0.96-0.107 0.32-0.297 0.563-0.381 0.844-0.477 0.266-0.091 0.596-0.204 1.172-0.56 0.531-0.329 0.544-0.759 0.52-1.435-0.016-0.447-0.033-0.954 0.228-1.402 0.456-0.783 1.012-0.603 1.379-0.485 0.199 0.064 0.372 0.12 0.552 0.078 0.017-0.138-0.101-0.526-0.189-0.814-0.202-0.662-0.478-1.569-0.328-2.484 0.084-0.511 0.237-0.824 0.482-0.984 0.286-0.187 0.591-0.109 0.836-0.046 0.322 0.083 0.384 0.075 0.477-0.059 0.354-0.512 0.452-0.98 0.589-1.627 0.058-0.273 0.123-0.582 0.216-0.93 0.145-0.543 0.424-0.924 0.829-1.13 0.615-0.313 1.502-0.227 2.788 0.271 1.085 0.42 2.072 0.517 2.709 0.524 0.003 0 0.007 0 0.010 0 0.278 0 0.529-0.13 0.804-0.333 1.845-1.771 3.878-2.77 5.88-2.861 0.387-0.017 0.794-0.003 1.207 0.035 0.45-0.113 0.721-0.461 0.832-0.794 0.138-0.414 0.092-0.995-0.448-1.385-1.374-0.989-2.849-1.844-4.384-2.539-0.464-0.21-0.929-0.378-1.392-0.507-0.204 0.154-1.149 0.904-2.020 2.198 0.067 0.153 0.461 1.076 0.508 1.895 0.024 0.408 0.037 0.933-0.031 1.115l-0.598-0.225c0 0-0.004 0.007-0.008 0.026 0.002-0.007 0.040-0.188-0-0.879-0.025-0.429-0.169-0.913-0.29-1.252-0.972 1.686-1.115 2.287-1.116 2.293-0.039 0.171-0.208 0.28-0.379 0.244s-0.281-0.203-0.247-0.375c0.014-0.070 0.169-0.734 1.267-2.62 0.745-1.279 1.611-2.15 2.128-2.604zM28.833 7.012c-0.163-0.366-0.599-1.252-1.355-2.134s-1.637-1.525-2.014-1.781l-1.196 0.963c0.438 0.337 1.141 0.884 1.59 1.27 1.186 1.020 2.041 2.194 2.076 2.244 0.015 0.020 0.027 0.042 0.036 0.064 0.037 0.049 0.083 0.114 0.137 0.195l0.725-0.821zM26.706 7.077c-0.337-0.382-0.774-0.84-1.265-1.262-0.3-0.258-0.728-0.599-1.107-0.895 0.014 0.235-0.017 0.477-0.097 0.716-0.093 0.282-0.244 0.526-0.436 0.723 1.101 0.185 2.16 0.482 2.904 0.718zM27.446 8.005c-0.438-0.16-2.614-0.928-4.616-1.13-0.125 0.023-0.255 0.033-0.387 0.031-0.618-0.011-1.208 0.033-1.754 0.132-2.004 0.367-3.311 1.465-4.091 2.122-0.137 0.116-0.261 0.219-0.371 0.305-0.035 0.027-0.070 0.054-0.105 0.081-0.552 0.534-1.088 1.141-1.601 1.818-2.028 2.677-1.902 3.957-1.842 4.572l0.009 0.089c0.014 0.159 0.103 0.447 0.198 0.752 0.245 0.793 0.582 1.878 0.264 2.679-0.293 0.739-1.040 0.806-1.761 0.87-0.518 0.046-1.053 0.094-1.47 0.371-0.894 0.594-0.444 2.122-0.036 2.931 0.161 0.32 0.359 0.56 0.534 0.772 0.3 0.363 0.61 0.739 0.468 1.306-0.091 0.362-0.341 0.596-0.583 0.822-0.307 0.287-0.573 0.535-0.56 1.048 0.012 0.508 0.156 0.562 0.416 0.66 0.175 0.066 0.392 0.147 0.553 0.362 0.286 0.381 0.123 0.704 0.003 0.94-0.086 0.169-0.167 0.329-0.163 0.567 0.004 0.3 0.468 0.786 0.885 1.123 0.325-0.381 1.084-1.056 2.774-1.813 0.965-0.432 1.694-0.52 2.465-0.613 1.207-0.146 2.574-0.311 5.348-1.912 3.258-1.881 4.639-4.271 5.464-5.7 0.106-0.184 0.202-0.349 0.29-0.493 0.070-0.115 0.2-0.383 0.304-0.598 0.076-0.156 0.146-0.3 0.193-0.389 0.715-1.336 1.019-3.101 0.905-5.254-0.479 1.613-1.456 4.012-3.39 6.241-3.242 3.737-9.542 5.776-9.809 5.861-0.169 0.053-0.348-0.040-0.401-0.208s0.039-0.348 0.207-0.402c0.061-0.019 5.787-1.874 9.036-5.149-0.63-0.208-2.091-0.623-3.108-0.391-0.418 0.096-0.779 0.186-1.098 0.266-0.789 0.198-1.359 0.342-2.030 0.368-0.004 0-0.009 0-0.013 0-0.171 0-0.313-0.135-0.319-0.308-0.007-0.177 0.13-0.326 0.307-0.332 0.576-0.023 1.095-0.147 1.792-0.322l-0.623-0.598c-0.127-0.123-0.132-0.325-0.009-0.453s0.325-0.132 0.452-0.009l0.914 0.878c0.153-0.037 0.314-0.075 0.485-0.114 1.391-0.317 3.349 0.363 3.727 0.502 0.003-0.003 0.005-0.006 0.008-0.009 1.038-1.196 1.791-2.455 2.333-3.604-0.852 0.464-2.244 1.063-3.129 0.621-0.588-0.294-1.036-0.823-1.469-1.334-0.473-0.559-0.92-1.087-1.506-1.285-0.167-0.057-0.257-0.238-0.2-0.406s0.238-0.257 0.405-0.2c0.754 0.255 1.28 0.877 1.789 1.478 0.185 0.218 0.365 0.431 0.551 0.621 0.134-0.416 0.358-1.202 0.365-1.844 0.010-0.914-0.446-2.209-0.45-2.222-0.059-0.167 0.028-0.35 0.194-0.409s0.349 0.027 0.408 0.194c0.020 0.057 0.499 1.414 0.487 2.444-0.010 0.904-0.377 1.994-0.479 2.282 0.062 0.041 0.126 0.077 0.191 0.11 0.798 0.398 2.63-0.623 3.209-1.013 0.022-0.015 0.045-0.026 0.069-0.035 0.722-1.822 0.897-3.172 0.9-3.196 0-0.003 0.001-0.006 0.001-0.009-0.441-2.897-1.322-4.193-1.53-4.464zM14.787 10.025c-0.691-0.017-1.712-0.133-2.829-0.565-1.075-0.417-1.838-0.517-2.268-0.298-0.24 0.122-0.403 0.359-0.501 0.724-0.089 0.331-0.149 0.619-0.208 0.897-0.141 0.666-0.262 1.241-0.689 1.859-0.36 0.522-0.862 0.392-1.162 0.315-0.13-0.033-0.277-0.071-0.327-0.038-0.021 0.013-0.127 0.103-0.201 0.551-0.125 0.768 0.115 1.558 0.309 2.193 0.179 0.589 0.309 1.015 0.132 1.333-0.055 0.098-0.164 0.227-0.375 0.282-0.368 0.097-0.678-0.003-0.928-0.084-0.35-0.113-0.433-0.14-0.63 0.198-0.168 0.288-0.155 0.662-0.141 1.057 0.021 0.609 0.047 1.356-0.663 1.893 0.232 0.421 1.077 1.857 2.359 2.982 1.349 1.184 3.14 2.088 3.574 2.3 0.011-0.024 0.019-0.048 0.025-0.073 0.058-0.233-0.036-0.372-0.341-0.743-0.187-0.226-0.419-0.508-0.612-0.892-0.623-1.239-0.931-2.965 0.254-3.752 0.553-0.367 1.198-0.424 1.767-0.475 0.687-0.061 1.083-0.113 1.224-0.469 0.235-0.591-0.063-1.552-0.28-2.254-0.109-0.353-0.204-0.658-0.224-0.884l-0.008-0.084c-0.069-0.696-0.211-2.145 1.968-5.022 0.253-0.334 0.512-0.651 0.775-0.952z"></path>
            </svg>
        </div>
    )
}