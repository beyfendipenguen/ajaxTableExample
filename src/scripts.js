var student_list =[];
$.ajax({
    url: 'src/ogrenci.xml',
    dataType: 'xml',
    success: function (xml) {
        $(xml).find('ogrenci').each(function (index, element) {
            let student = {
                first_name: $(this).find("ad").text(),
                last_name: $(this).find("soyad").text(),
                student_number: $(this).find("numara").text(),
                number_of_grade: $(this).find("sinif").text(),
                department: $(this).find("bolum").text()
            }
            student_list.push(student);

            var ad = $("<td>").text($(this).find("ad").text());
            var soyad = $("<td>").text($(this).find("soyad").text());
            var numara = $("<td>").text($(this).find("numara").text());

            $("table").find("tbody").append($("<tr>")
                .append($("<th>")
                    .attr("scope", "row")
                    .text(`${index+1}`)

                )
                .append(ad)
                .append(soyad)
                .append(numara)
            );
        });  
    },
    error: function () {
        $('.unordered_list').text('başarısız');
    }
});

$(document).ready(function () {
    $("tr").click(function () {
        $("#student_info").empty();
       let st_number = $('td',this).last().text();
       student_list.forEach(element => {
        if (element.student_number == st_number ) {
            $("#student_info").append($("<p>")
                .text("first name: "+ element.first_name)
            .append($("<p>")
                .text("last name: "+ element.last_name)
            )
            .append($("<p>")
                .text("department: "+element.department)
            )
            .append($("<p>")
                .text("grade: " + element.number_of_grade)
            )
            );
        }
    });
    });
});

